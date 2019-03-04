import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { Box, Button } from 'grommet';

const SorterButton = styled(Button)`
  flex-shrink: 1;
  height: 100%;
  user-select: none;
`;

const Sort = withTheme(({
  align,
  children,
  disabled,
  fill,
  onClick,
  direction,
  theme,
  themeProps,
}) => {
  let icon;
  if (direction) {
    const Icon =
      theme.dataTable.icons[direction === 'asc' ? 'ascending' : 'descending'];
    icon = <Icon style={{ height: '1rem' }} />;
  }
  let content = (
    <Box
      {...themeProps}
      flex='shrink'
      direction='row'
      justify={align}
      align='center'
      pad={{ horizontal: 'xsmall' }}
      gap='xsmall'
      fill={fill}
    >
      {children}
      {icon}
    </Box>
  );
  content = (
    <SorterButton
      disabled={disabled}
      fill={fill}
      hoverIndicator={true}
      onClick={onClick}
    >
      {content}
    </SorterButton>
  );

  return content;
});


const ENTER_KEY_CODE = 13;
const SPACE_KEY_CODE = 32;


const onClick = (e, onSort) => {
  const isActionKeyDown = e.keyCode === ENTER_KEY_CODE || e.keyCode === SPACE_KEY_CODE;
  const isMouseClick = e.keyCode === undefined;

  const cancelSortingRelatedKey = e.metaKey || e.ctrlKey;
  const direction = (isMouseClick || isActionKeyDown) && cancelSortingRelatedKey
    ? null
    : undefined;
  const keepOther = e.shiftKey || cancelSortingRelatedKey;

  e.preventDefault();
  onSort({ direction, keepOther });
};

const SortLabelBase = ({
  column, align, direction, children, onSort,
  getMessage, disabled, ...restProps
}) => (
  <div
    {...restProps}
  >
    <Sort
      active={!!direction}
      direction={direction === null ? undefined : direction}
      onClick={e => onClick(e, onSort)}
      disabled={disabled}
    >
      {children}
    </Sort>
  </div>
);

SortLabelBase.propTypes = {
  column: PropTypes.object,
  align: PropTypes.string,
  direction: PropTypes.oneOf(['asc', 'desc', null]),
  children: PropTypes.node,
  onSort: PropTypes.func.isRequired,
  getMessage: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

SortLabelBase.defaultProps = {
  column: undefined,
  direction: undefined,
  disabled: false,
  align: 'left',
  children: undefined,
};

export const SortLabel = SortLabelBase;
