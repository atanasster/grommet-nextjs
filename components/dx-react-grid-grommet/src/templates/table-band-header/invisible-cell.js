import React from 'react';
import styled from 'styled-components';
import { StyledTableCell } from '../table-cell';

const HiddenTableCell = styled(StyledTableCell)`
 display: none;
`;

export const InvisibleCell = () => (
  <HiddenTableCell />
);
