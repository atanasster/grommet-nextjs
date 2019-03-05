import React from 'react';
import PropTypes from 'prop-types';
import { TableRow as GrommetTableRow } from 'grommet';

export const TableRow = ({
  children,
  row, tableRow,
  ...rest
}) => (
  <GrommetTableRow
    {...rest}
  >
    {children}
  </GrommetTableRow>
);

TableRow.propTypes = {
  children: PropTypes.node,
  row: PropTypes.any,
  tableRow: PropTypes.object,
};

TableRow.defaultProps = {
  children: undefined,
  row: undefined,
  tableRow: undefined,
};
