import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from 'grommet';
import { FormNext, FormDown } from 'grommet-icons';

const StyledButton = styled(Button)`
  ${props => props.hidden && `
    cursor: default;
    opacity: 0;
  `}
`;


export const TableTreeExpandButton = ({
  visible, expanded, onToggle, ...restProps
}) => (
  <StyledButton
    hidden={!visible}
    onClick={(e) => {
      if (!visible) return;
      e.stopPropagation();
      onToggle();
    }}
    tabIndex={visible ? 0 : -1}
    icon={expanded ? <FormDown /> : <FormNext />}
    {...restProps}
  />
);

TableTreeExpandButton.propTypes = {
  visible: PropTypes.bool,
  expanded: PropTypes.bool,
  onToggle: PropTypes.func,
};

TableTreeExpandButton.defaultProps = {
  visible: false,
  expanded: false,
  onToggle: () => {},
};
