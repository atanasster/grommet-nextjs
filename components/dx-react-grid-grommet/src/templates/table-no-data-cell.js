import React from 'react';
import PropTypes from 'prop-types';
import { TableCell, Text } from 'grommet';


export const TableNoDataCell = ({
  style,
  colSpan,
  getMessage,
  tableRow,
  tableColumn,
  ...restProps
}) => (
  <TableCell
    style={style}
    colSpan={colSpan}
    {...restProps}
  >
    <Text size='large'>
      {getMessage('noData')}
    </Text>
  </TableCell>
);

TableNoDataCell.propTypes = {
  style: PropTypes.object,
  colSpan: PropTypes.number,
  getMessage: PropTypes.func.isRequired,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object,
};

TableNoDataCell.defaultProps = {
  style: null,
  colSpan: 1,
  tableRow: undefined,
  tableColumn: undefined,
};

