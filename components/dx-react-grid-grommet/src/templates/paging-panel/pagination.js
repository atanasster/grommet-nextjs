import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Box, Button, Text } from 'grommet';
import { FormPrevious, FormNext } from 'grommet-icons';
import { firstRowOnPage, lastRowOnPage, calculateStartPage } from '@devexpress/dx-grid-core';

const PageButton = ({
  text, isActive, isDisabled, onClick,
}) => (
  <Button
    disabled={isDisabled}
    onClick={onClick}
    {...isActive ? { tabIndex: -1 } : null}
  >
    {text}
  </Button>
);

PageButton.propTypes = {
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
};

PageButton.defaultProps = {
  onClick: () => {},
  isDisabled: false,
  isActive: false,
};

const ellipsisSymbol = '\u2026';

const renderPageButtons = (
  currentPage,
  totalPageCount,
  onCurrentPageChange,
) => {
  const pageButtons = [];
  const maxButtonCount = 3;
  let startPage = 1;
  let endPage = totalPageCount || 1;

  if (maxButtonCount < totalPageCount) {
    startPage = calculateStartPage(currentPage + 1, maxButtonCount, totalPageCount);
    endPage = (startPage + maxButtonCount) - 1;
  }
  if (startPage > 1) {
    pageButtons.push((
      <PageButton
        key={1}
        text={String(1)}
        onClick={() => onCurrentPageChange(0)}
      />
    ));

    if (startPage > 2) {
      pageButtons.push((
        <PageButton
          key='ellipsisStart'
          text={ellipsisSymbol}
          isDisabled={true}
        />
      ));
    }
  }

  for (let page = startPage; page <= endPage; page += 1) {
    pageButtons.push((
      <PageButton
        key={page}
        text={String(page)}
        isActive={page === currentPage + 1}
        onClick={() => onCurrentPageChange(page - 1)}
        isDisabled={startPage === endPage}
      />
    ));
  }

  if (endPage < totalPageCount) {
    if (endPage < totalPageCount - 1) {
      pageButtons.push((
        <PageButton
          key='ellipsisEnd'
          text={ellipsisSymbol}
          isDisabled={true}
        />
      ));
    }

    pageButtons.push((
      <PageButton
        key={totalPageCount}
        text={String(totalPageCount)}
        onClick={() => onCurrentPageChange(totalPageCount - 1)}
      />
    ));
  }

  return pageButtons;
};

export const Pagination = ({
  totalPages,
  totalCount,
  pageSize,
  currentPage,
  onCurrentPageChange,
  getMessage,
}) => {
  const from = firstRowOnPage(currentPage, pageSize, totalCount);
  const to = lastRowOnPage(currentPage, pageSize, totalCount);

  return (
    <Box direction='row-responsive' align='center'>
      <Text>
        {getMessage('info', { from, to, count: totalCount })}
      </Text>
      <Button
        icon={<FormPrevious />}
        disabled={currentPage === 0}
        onClick={() => (currentPage > 0) && onCurrentPageChange(currentPage - 1)}
      />
      {renderPageButtons(currentPage, totalPages, onCurrentPageChange)}
      <Button
        disabled={currentPage === totalPages - 1 || totalCount === 0}
        onClick={() => currentPage < totalPages - 1 && onCurrentPageChange(currentPage + 1)}
        icon={<FormNext />}
      />
    </Box>
  );
};

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onCurrentPageChange: PropTypes.func.isRequired,
  totalCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  getMessage: PropTypes.func.isRequired,
};

