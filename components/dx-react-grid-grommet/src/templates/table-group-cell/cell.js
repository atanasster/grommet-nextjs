import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from 'grommet';
import { TableCell } from '../../grommet/TableCell';

const GroupedCell = styled(TableCell)`
  cursor: pointer;
  padding-top: padding-left: ${props => props.theme.global.edgeSize.small};
`;

const CellBase = ({
  contentComponent: Content,
  iconComponent: Icon,
  style, colSpan, row,
  column, expanded,
  onToggle,
  classes, children,
  tableRow,
  tableColumn, ...restProps
}) => {
  const handleClick = () => onToggle();

  return (
    <GroupedCell
      colSpan={colSpan}
      style={style}
      onClick={handleClick}
      {...restProps}
    >
      <Box direction='row' align='center'>
        <Icon
          expanded={expanded}
        />
        <Content
          column={column}
          row={row}
        >
          {children}
        </Content>
      </Box>
    </GroupedCell>
  );
};

CellBase.propTypes = {
  contentComponent: PropTypes.func.isRequired,
  iconComponent: PropTypes.func.isRequired,
  style: PropTypes.object,
  colSpan: PropTypes.number,
  row: PropTypes.any,
  column: PropTypes.object,
  expanded: PropTypes.bool,
  onToggle: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object,
};

CellBase.defaultProps = {
  style: null,
  colSpan: 1,
  row: {},
  column: {},
  expanded: false,
  onToggle: () => {},
  children: undefined,
  className: undefined,
  tableRow: undefined,
  tableColumn: undefined,
};

export const Cell = CellBase;
