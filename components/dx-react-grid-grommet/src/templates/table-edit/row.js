import React from 'react';
import PropTypes from 'prop-types';
import { TableRow as GrommetTableRow } from '../../grommet/TableRow';

export const TableEditRow = ({
  children,
  row, tableRow,
  ...rest
}) => (
  <GrommetTableRow
    tableContext='row-edit'
    {...rest}
  >
    {children}
  </GrommetTableRow>
);

TableEditRow.propTypes = {
  children: PropTypes.node,
  row: PropTypes.any,
  tableRow: PropTypes.object,
};

TableEditRow.defaultProps = {
  children: undefined,
  row: undefined,
  tableRow: undefined,
};
