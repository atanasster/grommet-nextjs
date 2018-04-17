import React from 'react';
import { Box } from 'grommet';
import { StyledTdComponent } from '../StyledPagingTable';
import { extractTextProps } from './CellTextComponent';

export default ({ children, ...props }) => {
  const { style, ...rest } = props;
  const boxProps = { ...{ pad: 'small' }, ...extractTextProps(rest) };
  return (
    <StyledTdComponent style={style} role='gridcell' align='center'>
      <Box fill={true} {...boxProps}>
        {children}
      </Box>
    </StyledTdComponent>
  );
};
