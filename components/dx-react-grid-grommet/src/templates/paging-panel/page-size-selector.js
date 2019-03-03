import React from 'react';
import PropTypes from 'prop-types';
import { Box, Select, Text } from 'grommet';


const PageSizeSelectorBase = ({
  pageSize,
  onPageSizeChange,
  pageSizes,
  getMessage,
}) => {
  const showAll = getMessage('showAll');
  return (
    <Box direction='row-responsive' align='center' gap='small'>
      <Text>
        {getMessage('rowsPerPage')}
      </Text>
      <Box width='xsmall'>
        <Select
          value={String(pageSize)}
          onChange={event => onPageSizeChange(event.value)}
          options={pageSizes.map(item => (item !== 0 ? String(item) : showAll))}
        />
      </Box>
    </Box>
  );
};

PageSizeSelectorBase.propTypes = {
  pageSize: PropTypes.number.isRequired,
  onPageSizeChange: PropTypes.func.isRequired,
  pageSizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  getMessage: PropTypes.func.isRequired,
};

export const PageSizeSelector = PageSizeSelectorBase;
