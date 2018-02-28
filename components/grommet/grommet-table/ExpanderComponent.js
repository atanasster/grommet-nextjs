import React from 'react';
import { Add, Subtract } from 'grommet-icons';
import { StyledExpander} from './StyledTable';

export default ({ isExpanded, children }) => (
  <StyledExpander icon={isExpanded ? <Subtract /> : <Add />} >
    {children}
  </StyledExpander>
);

