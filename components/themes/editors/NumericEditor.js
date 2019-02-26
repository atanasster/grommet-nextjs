import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';
import { NumberInput } from 'grommet-controls';

const NumericEditor = ({
  object, onChange, decimals, min, max, step,
}) => (
  <Box
    flex={false}
  >
    <NumberInput
      value={object || ''}
      decimals={decimals}
      min={min}
      max={max}
      step={step}
      onChange={({ target: { value } }) => onChange(parseFloat(value, 10))}
    />
  </Box>
);

NumericEditor.propTypes = {
  object: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  decimals: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

NumericEditor.defaultProps = {
  object: undefined,
  min: 100,
  max: 900,
  step: 100,
  decimals: 0,
};


export default NumericEditor;
