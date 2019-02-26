import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button } from 'grommet';
import { base } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';
import ColorEditor from './ColorEditor';
import TextDecorationEditor from './TextDecorationEditor';
import FontWeightEditor from './FontWeightEditor';
import BreakpointEditor from './BreakpointEditor';
import CodeEditor from './CodeEditor';
import NumericEditor from './NumericEditor';
import PixelEditor from './PixelEditor';
import FontEditor from './FontEditor';
import { getProp } from '../utils';

const ThemeEditor = ({
  theme, onChange, path, ...rest
}) => {
  const mergedTheme = deepMerge(base, theme);
  const object = getProp(mergedTheme, path);
  const parts = path.split('-');
  const lastPath = parts.length > 0 ? parts[parts.length - 1] : '';
  const props = {
    onChange,
    path,
    theme: mergedTheme,
    object,
    ...rest,
  };
  let editor;
  if (parts.find(name => (name.startsWith('color') || name.startsWith('background')))) {
    editor = <ColorEditor {...props} />;
  } else if (lastPath === 'textDecoration') {
    editor = <TextDecorationEditor {...props} />;
  } else if (lastPath === 'responsiveBreakpoint') {
    editor = <BreakpointEditor {...props} />;
  } else if (['fontWeight', 'weight'].indexOf(lastPath) !== -1) {
    editor = <FontWeightEditor {...props} />;
  } else if (['zIndex', 'step'].indexOf(lastPath) !== -1) {
    editor = <NumericEditor {...props} max={1000} min={0} step={1} />;
  } else if (parts.indexOf('opacity') !== -1) {
    editor = <NumericEditor {...props} max={1} min={0} step={0.05} decimals={2} />;
  } else if (['radius', 'width', 'height', 'maxWidth', 'minWidth', 'horizontal', 'vertical', 'spacing', 'base'].indexOf(lastPath) !== -1) {
    editor = <PixelEditor {...props} />;
  } else if (lastPath === 'font') {
    editor = <FontEditor {...props} />;
  } else {
    let code;
    try {
      code = JSON.stringify(object);
    } catch (e) {
      code = object;
    }

    editor = <CodeEditor {...{ ...props, object: code }} />;
  }
  return (
    <Box direction='row' justify='between' fill='horizontal'>
      {editor}
      <Button label='clear' onClick={() => onChange(undefined)} />
    </Box>
  );
};

ThemeEditor.propTypes = {
  path: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
};

export default ThemeEditor;
