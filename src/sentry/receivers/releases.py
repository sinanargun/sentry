from __future__ import absolute_import, print_function

from django.db import IntegrityError, transaction
from django.db.models.signals import post_save

from sentry.models import Release, TagValue


def ensure_release_exists(instance, created, **kwargs):
    if not created:
        return

    if instance.key != 'sentry:release':
        return

    if instance.data and instance.data.get('release_id'):
        return

    try:
        with transaction.atomic():
            release = Release.objects.create(
                project=instance.project,
                version=instance.value,
                date_added=instance.first_seen,
            )
    except IntegrityError:
        pass
    else:
        instance.update(data={'release_id': release.id})


post_save.connect(
    ensure_release_exists,
    sender=TagValue,
    dispatch_uid="ensure_release_exists",
    weak=False
)
