import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button } from 'grommet';
import { FormDown, FormUp } from 'grommet-icons';
import { StyledTableCell } from './table-cell';

const TableDetailToggleCellBase = ({
  style, expanded, classes, onToggle,
  tableColumn, tableRow, row,
  className,
  ...restProps
}) => {
  const handleClick = (e) => {
    e.stopPropagation();
    onToggle();
  };
  return (
    <StyledTableCell
      style={style}
      {...restProps}
    >
      <Box direction='row' align='center'>
        <Button
          onClick={handleClick}
        >
          {expanded ? <FormUp /> : <FormDown />}
        </Button>
      </Box>
    </StyledTableCell>
  );
};

TableDetailToggleCellBase.propTypes = {
  style: PropTypes.object,
  expanded: PropTypes.bool,
  onToggle: PropTypes.func,
  tableColumn: PropTypes.object,
  tableRow: PropTypes.object,
  row: PropTypes.any,
};

TableDetailToggleCellBase.defaultProps = {
  style: null,
  expanded: false,
  onToggle: () => {},
  tableColumn: undefined,
  tableRow: undefined,
  row: undefined,
};

export const TableDetailToggleCell = TableDetailToggleCellBase;
