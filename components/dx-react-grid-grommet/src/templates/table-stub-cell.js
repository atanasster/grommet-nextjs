import React from 'react';
import PropTypes from 'prop-types';
import { TableCell } from 'grommet';


export const TableStubCell = ({
  classes,
  className,
  tableRow,
  tableColumn,
  ...restProps
}) => (
  <TableCell
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

