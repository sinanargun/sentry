/** @jsx jsx */
// import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import {css, jsx} from '@emotion/core';

import RadioField from 'app/views/settings/components/forms/radioField';
import SelectField from 'app/views/settings/components/forms/selectField';
import SelectControl from 'app/components/forms/selectControl';
// import {defined} from 'app/utils';
// import {defined} from 'app/utils';
// import InlineSvg from 'app/components/inlineSvg';
// import Tooltip from 'app/components/tooltip';
// import {Context} from 'app/components/forms/form';

// name="radio"
// label="Radio Field"
// onChange={action('RadioField onChange')}
// choices={[
//         ['choice_one', 'Choice One'],
//     ['choice_two', 'Choice Two'],
// ['choice_three', 'Choice Three'],
// ]}

enum Action {
  CustomizedAlerts,
  AlertOnEveryIssue,
  CreateAlertLater,
}

const NoBr = styled('td')`
  display: inline-block;
  float: left;
  white-space: nowrap;
`;

const customizedAlertsFragment: React.ReactFragment = (
  <div
    css={css`
      display: grid;
      grid-template-columns: repeat(5, auto);
      grid-gap: 10px;
    `}
  >
    <span>When there are more than</span>
    <SelectControl
      choices={[
        ['1', 'Users Affected'],
        ['3', 'Errors'],
      ]}
    />
    <span> in </span>
    <SelectControl
      choices={[
        [0, 'short'],
        [1, 'this is a really really long long long long long text'],
      ]}
    />
    <span> in the project</span>
  </div>
);

type IssueAlertOptionsProps = {};
const IssueAlertOptions: React.FC<IssueAlertOptionsProps> = (
  // @ts-ignore
  props: IssueAlertOptionsProps
) => (
  <div>
    <RadioField
      name="Brown Dog"
      choices={[
        // TODO(jeff): Ask about supplying translations.
        [Action.CustomizedAlerts, customizedAlertsFragment],
        [Action.AlertOnEveryIssue, 'Alert me on every new issue'],
        [Action.CreateAlertLater, "I'll create my own alerts later"],
      ]}
    />
    <SelectField />
  </div>
);

export default IssueAlertOptions;
