import React from 'react';
import PropTypes from 'prop-types';
import { TableRow as GrommetTableRow } from '../../grommet/TableRow';

export const TableDetailRow = ({
  children,
  row, tableRow,
  ...rest
}) => (
  <GrommetTableRow
    tableContext='row-detail'
    {...rest}
  >
    {children}
  </GrommetTableRow>
);

TableDetailRow.propTypes = {
  children: PropTypes.node,
  row: PropTypes.any,
  tableRow: PropTypes.object,
};

TableDetailRow.defaultProps = {
  children: undefined,
  row: undefined,
  tableRow: undefined,
};
