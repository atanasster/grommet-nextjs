import React from 'react';
import PropTypes from 'prop-types';
import { Box, RadioButton } from 'grommet';
import ColorSelect from './ColorSelect';

const ColorEditor = ({
  theme, object, path, onChange,
}) => {
  const [color, setColor] = React.useState(object);
  React.useEffect(() => {
    setColor(object);
  }, [path]);

  const colorIsObject = typeof object === 'object';
  const updateColorIsObject = (value) => {
    if (value !== colorIsObject) {
      if (value) {
        let newColor;
        if (typeof color === 'object') {
          newColor = {
            light: colorIsObject ? object.light : object,
            dark: color.dark,
          };
        } else {
          newColor = {
            light: colorIsObject ? object.light : object,
            dark: colorIsObject ? object.dark : object,
          };
        }
        onChange(newColor);
      } else {
        onChange(object.light);
      }
    }
  };
  const onChangeColor = (newColor) => {
    if (colorIsObject) {
      const objColor = { ...(colorIsObject ? object : {}), light: newColor };
      onChange(objColor);
    } else {
      onChange(newColor);
    }
  };
  const onChangeDarkColor = (newColor) => {
    if (colorIsObject) {
      const objColor = { ...(colorIsObject ? object : {}), dark: newColor };
      onChange(objColor);
    } else {
      onChange(newColor);
    }
  };

  return (
    <Box direction='row' gap='small'>
      <Box direction='row' gap='xsmall'>
        <RadioButton
          checked={!colorIsObject}
          name='color_type'
          label='string'
          onChange={() => updateColorIsObject(false)}
        />
        <RadioButton
          checked={colorIsObject}
          name='color_type'
          label='object'
          onChange={() => updateColorIsObject(true)}
        />
      </Box>
      <Box direction='row' gap='xsmall'>
        <ColorSelect
          path={path}
          theme={theme}
          onChange={onChangeColor}
          label={colorIsObject ? 'light' : 'color'}
          color={colorIsObject ? object.light : object}
          dark={false}
        />
        {colorIsObject && (
          <ColorSelect
            path={path}
            theme={theme}
            onChange={onChangeDarkColor}
            label='dark'
            color={colorIsObject ? object.dark : object}
            dark={true}
          />
        )}
      </Box>
    </Box>
  );
};

ColorEditor.defaultProps = {
  object: undefined,
};

ColorEditor.propTypes = {
  object: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onChange: PropTypes.func.isRequired,
};

export default ColorEditor;
