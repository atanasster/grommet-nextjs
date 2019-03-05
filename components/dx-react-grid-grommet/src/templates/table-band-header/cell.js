import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { normalizeColor } from 'grommet/utils';
import { StyledTableCell } from '../table-cell';

const BandedCell = styled(StyledTableCell)`
    padding-right: ${props => props.theme.global.edgeSize.small};
    padding-left: ${props => props.theme.global.edgeSize.small};
    &:first-child {
      padding-left: ${props => props.theme.global.edgeSize.medium};
    }
    &:last-child {
      padding-right: ${props => props.theme.global.edgeSize.medium};
      border-right: 0;
    }
    vertical-align: middle;
    height: ${props => props.theme.global.edgeSize.large};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-bottom: ${props => `solid ${props.theme.global.borderSize.xsmall} ${normalizeColor('border', props.theme)};`}}
    border-right: ${props => `solid ${props.theme.global.borderSize.xsmall} ${normalizeColor('border', props.theme)};`}}
    ${props => props.borderBefore && `border-left: solid ${props.theme.global.borderSize.xsmall} ${normalizeColor('border', props.theme)};`}}
`;


export const Cell = ({
  column, value, children, tableRow, tableColumn, row, beforeBorder,
  ...restProps
}) => (
  <BandedCell
    borderBefore={beforeBorder}
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

