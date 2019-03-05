import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const GroupedContent = styled.span`
  vertical-align: middle;
`;

export const Content = ({
  column, row, classes, children, ...restProps
}) => (
  <GroupedContent
    {...restProps}
  >
    <strong>
      {column.title || column.name}
        :
      {' '}
    </strong>
    {children || String(row.value)}
  </GroupedContent>
);

Content.propTypes = {
  row: PropTypes.any,
  column: PropTypes.object,
  children: PropTypes.node,
};

Content.defaultProps = {
  row: {},
  column: {},
  children: undefined,
};

