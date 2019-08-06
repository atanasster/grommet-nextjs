import React from 'react';
import { Box } from 'grommet';
import { NumberInput } from 'grommet-controls';

interface NumericEditorProps {
  object?: number,
  min?: number,
  max?: number,
  step?: number,
  decimals?: number,
  onChange(value: number): void,
}

const NumericEditor: React.FC<NumericEditorProps> = ({
  object,
  onChange,
  decimals,
  min,
  max,
  step,
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
      onChange={({ target: { value } }) => onChange(parseFloat(value))}
    />
  </Box>
);


NumericEditor.defaultProps = {
  min: 100,
  max: 900,
  step: 100,
  decimals: 0,
};


export default NumericEditor;
