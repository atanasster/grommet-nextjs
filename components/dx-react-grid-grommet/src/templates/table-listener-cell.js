import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Sizer } from '@devexpress/dx-react-core';
import { TableStubCell } from './table-stub-cell';


const StyledCell = styled(TableStubCell)`
  border: 0;
`;

const TableBorderlessStubCell = props => (
  <StyledCell
    {...props}
  />
);


export const TableListenerCell = ({ listen, onSizeChange, ...restProps }) => (listen ? (
  <Sizer
    containerComponent={TableBorderlessStubCell}
    onSizeChange={onSizeChange}
    {...restProps}
  />
) : (
  <TableBorderlessStubCell {...restProps} />
));

TableListenerCell.propTypes = {
  listen: PropTypes.bool.isRequired,
  onSizeChange: PropTypes.func.isRequired,
};
