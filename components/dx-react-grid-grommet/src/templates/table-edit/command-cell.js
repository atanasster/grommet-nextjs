import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button } from 'grommet';
import { TableCell } from '../../grommet/TableCell';

export const CommandButton = ({
  onExecute,
  text,
  ...restProps
}) => (
  <Button
    primary={true}
    label={text}
    onClick={(e) => {
      e.stopPropagation();
      onExecute();
    }}
    {...restProps}
  />
);

CommandButton.propTypes = {
  onExecute: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};


export const EditCommandHeadingCell = ({
  children,
  tableRow, tableColumn,
  rowSpan,
  ...restProps
}) => (
  <TableCell
    align='center'
    noWrap={true}
    rowSpan={rowSpan}
    {...restProps}
  >
    {children}
  </TableCell>
);

EditCommandHeadingCell.propTypes = {
  children: PropTypes.node,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object,
  rowSpan: PropTypes.number,
};

EditCommandHeadingCell.defaultProps = {
  children: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  rowSpan: undefined,
};


export const EditCommandCell = ({
  tableRow, tableColumn, row, children, ...restProps
}) => (
  <TableCell
    {...restProps}
  >
    <Box direction='row' gap='small'>
      {children}
    </Box>
  </TableCell>
);

EditCommandCell.propTypes = {
  children: PropTypes.node,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object,
  row: PropTypes.any,
};

EditCommandCell.defaultProps = {
  children: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  row: undefined,
};
