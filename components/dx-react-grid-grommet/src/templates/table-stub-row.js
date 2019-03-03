import * as React from 'react';
import * as PropTypes from 'prop-types';
import { StyledTableRow } from './table-row';

export const TableStubRow = ({
  children,
  tableRow,
  ...restProps
}) => (
  <StyledTableRow
    {...restProps}
  >
    {children}
  </StyledTableRow>
);

TableStubRow.propTypes = {
  children: PropTypes.node,
  tableRow: PropTypes.object,
};

TableStubRow.defaultProps = {
  children: undefined,
  tableRow: undefined,
};
