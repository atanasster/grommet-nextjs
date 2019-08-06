import React from 'react';
import { Box } from 'grommet';
import { parseMetricToNum } from 'grommet/utils/mixins';
import NumericEditor from './NumericEditor';

interface PixelEditorProps {
  object?: string,
  min?: number,
  max?: number,
  step?: number,
  onChange(value: string): void,
};

const PixelEditor: React.FC<PixelEditorProps> = ({ object, onChange, ...rest }) => {
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


PixelEditor.defaultProps = {
  object: undefined,
  min: 0,
  max: 900,
  step: 1,
};


export default PixelEditor;
