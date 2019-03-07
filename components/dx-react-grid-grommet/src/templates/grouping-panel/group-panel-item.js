import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box, Text, Button } from 'grommet';
import { FormClose } from 'grommet-icons';
import TableSortLabel from '@material-ui/core/TableSortLabel';

const ENTER_KEY_CODE = 13;
const SPACE_KEY_CODE = 32;

const PointerBox = styled(Box)`
  cursor: pointer;
`;


const Chip = ({
  label, draft, onClick, onDelete,
}) => (

  <PointerBox
    round='small'
    background={{ color: 'light-1', opacity: draft ? 'weak' : undefined }}
    onClick={onClick}
    direction='row'
    align='center'
    justiy='between'
    pad={{ vertical: 'xsmall', horizontal: 'small' }}
    gap='xsmall'
  >
    <Text size='small'>
      {label}
    </Text>
    {onDelete && (
      <Button
        plain={true}
        pad='none'
        onClick={onDelete}
      >
        <Box direction='row' align='center'>
          <FormClose />
        </Box>
      </Button>
    )}
  </PointerBox>
);


const label = (showSortingControls, sortingEnabled, sortingDirection, column) => {
  const title = column.title || column.name;
  return showSortingControls
    ? (
      <TableSortLabel
        active={!!sortingDirection}
        direction={sortingDirection === null ? undefined : sortingDirection}
        disabled={!sortingEnabled}
        tabIndex={-1}
      >
        {title}
      </TableSortLabel>
    )
    : title;
};

const GroupPanelItemBase = ({
  item: { column, draft },
  onGroup, showGroupingControls,
  showSortingControls, sortingDirection, onSort,
  sortingEnabled, groupingEnabled,
  ...restProps
}) => {
  const onClick = (e) => {
    const isActionKeyDown = e.keyCode === ENTER_KEY_CODE || e.keyCode === SPACE_KEY_CODE;
    const isMouseClick = e.keyCode === undefined;
    const cancelSortingRelatedKey = e.metaKey || e.ctrlKey;
    const direction = (isMouseClick || isActionKeyDown) && cancelSortingRelatedKey
      ? null
      : undefined;

    onSort({
      direction,
      keepOther: cancelSortingRelatedKey,
    });
  };

  return (
    <Chip
      label={label(showSortingControls, sortingEnabled, sortingDirection, column)}
      draft={draft}
      {...showGroupingControls
        ? { onDelete: groupingEnabled ? onGroup : null }
        : null}
      {...showSortingControls
        ? { onClick: sortingEnabled ? onClick : null }
        : null}
      {...restProps}
    />
  );
};

GroupPanelItemBase.propTypes = {
  item: PropTypes.shape({
    column: PropTypes.shape({
      title: PropTypes.string,
    }).isRequired,
    draft: PropTypes.bool,
  }).isRequired,
  showSortingControls: PropTypes.bool,
  sortingDirection: PropTypes.oneOf(['asc', 'desc', null]),
  onSort: PropTypes.func,
  onGroup: PropTypes.func,
  showGroupingControls: PropTypes.bool,
  sortingEnabled: PropTypes.bool,
  groupingEnabled: PropTypes.bool,
};

GroupPanelItemBase.defaultProps = {
  showSortingControls: false,
  sortingEnabled: false,
  sortingDirection: undefined,
  onSort: undefined,
  onGroup: undefined,
  showGroupingControls: false,
  groupingEnabled: false,
};

export const GroupPanelItem = GroupPanelItemBase;
