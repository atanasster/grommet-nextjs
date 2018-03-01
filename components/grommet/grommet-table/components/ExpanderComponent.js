import React from 'react';
import { Add, Subtract } from 'grommet-icons';
import { StyledExpander } from '../StyledTable';

export default ({ isExpanded, children, expanderProps }) => {
  const props = {
    ...{
      CloseIcon: <Subtract />,
      OpenIcon: <Add />,
      tabIndex: '0',
      onClick: () => {},
    },
    ...expanderProps,
  };
  const { OpenIcon, CloseIcon, ...rest } = props;
  return (
    <StyledExpander
      icon={isExpanded ? CloseIcon : OpenIcon}
      {...rest}
    >
      {children}
    </StyledExpander>
  );
};

