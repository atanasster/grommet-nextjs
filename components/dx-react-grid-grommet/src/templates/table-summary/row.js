import React from 'react';
import PropTypes from 'prop-types';
import { TableRow as GrommetTableRow } from '../../grommet/TableRow';

export const TableSummarylRow = ({
  children,
  row, tableRow,
  ...rest
}) => (
  <GrommetTableRow
    tableContext='row-summary'
    {...rest}
  >
    {children}
  </GrommetTableRow>
);

TableSummarylRow.propTypes = {
  children: PropTypes.node,
  row: PropTypes.any,
  tableRow: PropTypes.object,
};

TableSummarylRow.defaultProps = {
  children: undefined,
  row: undefined,
  tableRow: undefined,
};
