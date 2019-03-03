import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';
import { PageSizeSelector } from './page-size-selector';
import { Pagination } from './pagination';

export const Pager = ({
  currentPage,
  pageSizes,
  totalPages,
  pageSize,
  onCurrentPageChange,
  onPageSizeChange,
  totalCount,
  getMessage,
}) => (
  <Box
    overflow='hidden'
    pad='xsmall'
    gap='xsmall'
  >
    {!!pageSizes.length && (
    <PageSizeSelector
      pageSize={pageSize}
      onPageSizeChange={onPageSizeChange}
      pageSizes={pageSizes}
      getMessage={getMessage}
    />
    )}
    <Pagination
      totalPages={totalPages}
      totalCount={totalCount}
      currentPage={currentPage}
      onCurrentPageChange={page => onCurrentPageChange(page)}
      pageSize={pageSize}
      getMessage={getMessage}
    />
  </Box>
);

Pager.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  pageSizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  pageSize: PropTypes.number.isRequired,
  onCurrentPageChange: PropTypes.func.isRequired,
  onPageSizeChange: PropTypes.func.isRequired,
  totalCount: PropTypes.number.isRequired,
  getMessage: PropTypes.func.isRequired,
};

