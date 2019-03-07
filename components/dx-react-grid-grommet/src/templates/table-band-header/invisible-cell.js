import React from 'react';
import styled from 'styled-components';
import { TableCell } from '../../utils/TableCell';

const HiddenTableCell = styled(TableCell)`
 display: none;
`;

export const InvisibleCell = () => (
  <HiddenTableCell />
);
