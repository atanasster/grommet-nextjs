import React from 'react';
import PropTypes from 'prop-types';
import { Table as GrommetTable } from '../grommet/Table';


export const Table = ({
  tableRef, use, theme, ...rest
}) => (
  <GrommetTable
    ref={tableRef}
    sticky={!!use}
    use={use}
    {...rest}
  />
);

Table.propTypes = {
  use: PropTypes.oneOf(['head', 'foot']),
  children: PropTypes.node.isRequired,
};

Table.defaultProps = {
  use: undefined,
};
