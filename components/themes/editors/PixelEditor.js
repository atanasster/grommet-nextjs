import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';
import { parseMetricToNum } from 'grommet/utils/mixins';
import NumericEditor from './NumericEditor';

const PixelEditor = ({ object, onChange, ...rest }) => {
  const pixels = parseMetricToNum(object);
  return (
    <Box direction='row' align='center' gap='small'>
      <NumericEditor
        object={pixels}
        onChange={value => onChange(`${value}px`)}
        {...rest}
      />
      px.
    </Box>
  );
};

PixelEditor.propTypes = {
  object: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
};

PixelEditor.defaultProps = {
  object: undefined,
  min: 0,
  max: 900,
  step: 1,
};


export default PixelEditor;
