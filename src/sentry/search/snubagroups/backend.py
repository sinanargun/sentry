from __future__ import absolute_import
import logging
import datetime

from sentry_sdk import Hub

from sentry.search.snuba import SnubaSearchBackend
from sentry.utils import snuba


# TODO:
# This backend is intended to "extend" the current events search backend.
# The goal of it is to transition to searches that use snuba more heavily ,
# perhaps ideally not using postgres/django models in some or all cases.

# This file overrides certain methods, and variables in order to do this.
# Feel free to break the base backend up more if you need to modify certain bits of functionality in here.
# We alias field names with "groups." or "events." where appropriate, use a different dataset,
# and remove some issue_only_fields and query building magic from the backup.

# We are running this backend alongside the original one and logging results.
# Eventually, we hope to remove the original backend and use this if it performs well.


class GroupDatasetSearchBackend(SnubaSearchBackend):
    QUERY_DATASET = snuba.Dataset.Groups
    ISSUE_FIELD_NAME = "events.issue"
    logger = logging.getLogger("sentry.search.snubagroups")
    dependency_aggregations = {"priority": ["events.last_seen", "times_seen"]}
    issue_only_fields = set(
        ["query", "bookmarked_by", "assigned_to", "unassigned", "subscribed_by"]
    )
    sort_strategies = {
        # TODO: If not using environment filters, could these sort methods use last_seen and first_seen from groups instead? so only add prefix conditionally?
        "date": "events.last_seen",
        "freq": "times_seen",
        "new": "events.first_seen",
        "priority": "priority",
    }

    aggregation_defs = {
        "times_seen": ["count()", ""],
        "events.first_seen": ["multiply(toUInt64(min(events.timestamp)), 1000)", ""],
        "events.last_seen": ["multiply(toUInt64(max(events.timestamp)), 1000)", ""],
        # https://github.com/getsentry/sentry/blob/804c85100d0003cfdda91701911f21ed5f66f67c/src/sentry/event_manager.py#L241-L271
        "priority": ["toUInt64(plus(multiply(log(times_seen), 600), `events.last_seen`))", ""],
        # Only makes sense with WITH TOTALS, returns 1 for an individual group.
        "total": ["uniq", "events.issue"],
    }

    def build_group_queryset(
        self, projects, environments, search_filters, retention_window_start, date_from, date_to
    ):
        # This is an override to see if we need to hit Postgres at all.
        # If we don't, we just return None for a group_queryset and the result builder will not
        # estimate the results or run pre/post filtering.

        # We only need to hit postgres if search_filters contains certain fields.

        search_postgres = False
        for search_filter in search_filters:
            if search_filter.key.name in self.issue_only_fields:
                search_postgres = True
                break
            elif (
                search_filter.key.name in ["first_seen", "last_seen", "first_release"]
                and environments
            ):
                # we can't query snuba on first_seen, last_seen, and first_release if we have environment filters - we need postgres for this data
                # because snuba events might have been deleted due to retention, but GroupEnvironment model still holds this information.
                search_postgres = True
                break

        if search_postgres is True:
            return super(GroupDatasetSearchBackend, self).build_group_queryset(
                projects, environments, search_filters, retention_window_start, date_from, date_to
            )
        else:
            # TODO: Add `status` filter to snuba query to exlcude status' in:
            # GroupStatus.PENDING_DESLETION, GroupStatus.DELETION_IN_PROGRESS, GroupStatus.PENDING_MERGE,
            # as well as project_id must be in PROJECTS
            # Not done here, maybe another function hook.
            return None

    def get_queryset_modifiers(
        self, projects, environments=None, search_filters=None, date_from=None, date_to=None
    ):
        with Hub.current.start_span(op="func", description="override_get_queryset_modifiers"):
            # We override this function to remove status and active_at
            qs_builder_conditions = super(GroupDatasetSearchBackend, self).get_queryset_modifiers(
                projects, environments, search_filters, date_from, date_to
            )
            del qs_builder_conditions["status"]
            del qs_builder_conditions["active_at"]
            return qs_builder_conditions

    def modify_converted_filter(self, search_filter, converted_filter, environment_ids=None):
        with Hub.current.start_span(op="func", description="override_modify_converted_filter"):
            table_alias = ""
            converted_filter = self.modify_filter_if_date(search_filter, converted_filter)

            # TODO: What is this still now doing and is it neccessary?
            # we can't query snuba on first_seen, last_seen, and first_relesae if we have environment filters - we need postgres for this data
            # because events might have been deleted due to retention, but GroupEnvironment model still holds this information.
            if search_filter.key.name in ["first_seen", "last_seen", "first_release"]:
                if environment_ids is not None:
                    table_alias = "events."
                else:
                    table_alias = "groups."

                if isinstance(converted_filter[0], list):
                    converted_filter[0][1][0] = table_alias + converted_filter[0][1][0]
                else:
                    converted_filter[0] = table_alias + converted_filter[0]

            return table_alias, converted_filter

    def modify_filter_if_date(self, search_filter, converted_filter):
        with Hub.current.start_span(op="func", description="override_modify_filter_if_date"):
            special_date_names = ["groups.active_at", "first_seen", "last_seen"]
            if search_filter.key.name in special_date_names:
                # Need to get '2018-02-06T03:35:54' format out of 1517888878000 format
                datetime_value = datetime.datetime.fromtimestamp(converted_filter[2] / 1000)
                datetime_value = (
                    datetime_value.replace(microsecond=0).isoformat().replace("+00:00", "")
                )
                converted_filter[2] = datetime_value
            return converted_filter
