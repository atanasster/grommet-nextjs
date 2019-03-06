import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'grommet';
import { FormNext, FormDown } from 'grommet-icons';

export const Icon = ({
  expanded,
  ...restProps
}) => (
  <Button
    {...restProps}
    icon={expanded ? <FormDown /> : <FormNext />}
  />
);

Icon.propTypes = {
  expanded: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

Icon.defaultProps = {
  className: undefined,
};

