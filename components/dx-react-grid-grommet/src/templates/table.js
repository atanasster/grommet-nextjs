import React from 'react';
import PropTypes from 'prop-types';
import RootRef from '@material-ui/core/RootRef';
import { Table as GrommetTable } from 'grommet';
import { RefType } from '@devexpress/dx-react-core';

export const Table = ({ tableRef, ...rest }) => (
  <RootRef rootRef={tableRef}>
    <GrommetTable {...rest} />
  </RootRef>
);

Table.propTypes = {
  use: PropTypes.oneOf(['head', 'foot']),
  children: PropTypes.node.isRequired,
  tableRef: RefType.isRequired,
};

Table.defaultProps = {
  use: undefined,
};
