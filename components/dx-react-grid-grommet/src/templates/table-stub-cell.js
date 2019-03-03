import React from 'react';
import PropTypes from 'prop-types';
import { StyledTableCell } from './table-cell';


export const TableStubCell = ({
  classes,
  className,
  tableRow,
  tableColumn,
  ...restProps
}) => (
  <StyledTableCell
    {...restProps}
  />
);

TableStubCell.propTypes = {
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object,
};

TableStubCell.defaultProps = {
  tableRow: undefined,
  tableColumn: undefined,
};

