import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TableCell } from '../../utils/TableCell';

const BandedCell = styled(TableCell)`
    vertical-align: middle;
    height: ${props => props.theme.global.edgeSize.large};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;


export const Cell = ({
  column, value, children, tableRow, tableColumn, row, beforeBorder,
  ...restProps
}) => (
  <BandedCell
    scope='col'
    borderBefore={beforeBorder}
    tableContext='cell-banded-header'
    {...restProps}
  >
    {children}
  </BandedCell>
);

Cell.propTypes = {
  value: PropTypes.any,
  column: PropTypes.object,
  row: PropTypes.any,
  children: PropTypes.node,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object,
  beforeBorder: PropTypes.bool,
};

Cell.defaultProps = {
  value: undefined,
  column: undefined,
  row: undefined,
  children: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  beforeBorder: false,
};

