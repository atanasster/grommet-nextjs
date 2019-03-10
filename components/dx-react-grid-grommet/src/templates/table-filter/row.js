import React from 'react';
import PropTypes from 'prop-types';
import { TableRow as GrommetTableRow } from '../../grommet/TableRow';

export const TableFilterRow = ({
  children,
  row, tableRow,
  ...rest
}) => (
  <GrommetTableRow
    tableContext='row-filter'
    {...rest}
  >
    {children}
  </GrommetTableRow>
);

TableFilterRow.propTypes = {
  children: PropTypes.node,
  row: PropTypes.any,
  tableRow: PropTypes.object,
};

TableFilterRow.defaultProps = {
  children: undefined,
  row: undefined,
  tableRow: undefined,
};
