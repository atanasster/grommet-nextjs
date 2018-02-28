import React from 'react';
import { Add, Subtract } from 'grommet-icons';
import { StyledExpander} from './StyledTable';

export default ({ isExpanded, children }) => (
  <StyledExpander tabIndex='0' icon={isExpanded ? <Subtract /> : <Add />} onClick={() => {}}>
    {children}
  </StyledExpander>
);

