import React from 'react';
import styled from 'styled-components';
import { TableRow } from './table-row';

const InvisibleTableRow = styled(TableRow)`
  visibility: hidden;
`;

export const TableInvisibleRow = props => (
  <InvisibleTableRow
    {...props}
  />
);
