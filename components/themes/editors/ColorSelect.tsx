import React from 'react';
import colorParse from 'color-parse';
import {
  Box, Button, Text, Select, RadioButton, FormField,
} from 'grommet';
import { base } from 'grommet/themes';
import { normalizeColor, getRGBA } from 'grommet/utils/colors';
import { ColorInput, materialColors, NumberInput } from 'grommet-controls';
import { Modal } from '../../Modal/index';
import ColorBox from './ColorBox';

const componentToHex = (c) => {
  const hex = c.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
};

const rgbToHex = (r, g, b) => `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;

interface ColorSelectProps {
  label:string,
  color: string,
  onChange(string): void,
  dark: boolean,
  theme: object,
  path: string,
}

class ColorSelect extends React.Component<ColorSelectProps> {
  state = {
    color: undefined,
    open: false,
    isNamedColor: undefined,
    opacity: 1,
  };

  stateFromProps(props) {
    const { color, theme, dark } = props;
    const colorValue = normalizeColor(color, {
      ...theme, dark,
    });
    const rgbArray = colorParse(colorValue);
    const themeColors = Object.keys(base.global.colors);
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      color,
      isNamedColor: rgbArray.alpha === 1 && themeColors.indexOf(color) !== -1,
      opacity: rgbArray.alpha || 1,
    });
  }

  componentDidMount() {
    this.stateFromProps(this.props);
  }

  componentWillReceiveProps(newProps) {
    this.stateFromProps(newProps);
  }

  render() {
    const { label, onChange, theme, dark, color: initial, path } = this.props;
    const { color, isNamedColor, open, opacity } = this.state;
    const colorValue = normalizeColor(color, {
      ...theme, dark,
    });
    const rgbArray = colorParse(colorValue);
    let colorRGB = getRGBA(color);
    let colorHex = colorValue;
    if (Array.isArray(rgbArray.values) && rgbArray.values.length === 3) {
      colorRGB = `rgba(${rgbArray.values[0]}, ${rgbArray.values[1]}, ${rgbArray.values[2]}, ${opacity})`;
      colorHex = rgbToHex(rgbArray.values[0], rgbArray.values[1], rgbArray.values[2]);
    }
    const colorForTheme = () => {
      if (isNamedColor) {
        return color;
      } if (opacity !== 1) {
        return colorRGB;
      }
      return colorHex;
    };

    let layer;
    if (open) {
      layer = (
        <Modal
          title={`${path.replace(/-/g, '.')}${label === 'color' ? '' : `.${label}`}`}
          onClose={() => this.setState({
            open: false,
          })}
          onConfirm={() => {
            this.setState({
              open: false,
            });
            onChange(colorForTheme());
          }}
        >
          <Box direction='row-responsive' gap='medium'>
            <Box width='1/2' gap='medium'>
              <RadioButton
                checked={isNamedColor}
                onChange={() => this.setState({
                  isNamedColor: true,
                })}
                name='color_trype'
                label='color name'
              />
              <FormField
                label='existing color name'
              >
                <Select
                  disabled={!isNamedColor}
                  valueLabel={(
                    <Box direction='row' pad='xsmall'>
                      <Box width='small' gap='small' direction='row'>
                        <Text>{`${color} `}</Text>
                        <ColorBox theme={theme} color={color} dark={dark} />
                      </Box>
                    </Box>
                  )}
                  options={Object.keys(base.global.colors)}
                  onChange={({ target: { value } }) => this.setState({
                    color: value,
                  })}
                >
                  {option => (
                    <Box key={`option_${option}`} direction='row' justify='between' align='center' pad='xsmall'>
                      <Text>
                        {option}
                      </Text>
                      <ColorBox theme={theme} color={option} />
                    </Box>
                  )}
                </Select>
              </FormField>
            </Box>
            <Box width='1/2' gap='medium'>
              <RadioButton
                checked={!isNamedColor}
                onChange={() => this.setState({
                  isNamedColor: false,
                })}
                name='color_trype'
                label='color value'
              />
              <FormField
                label='color'
              >
                <ColorInput
                  value={colorHex || ''}
                  onChange={({ target: { value } }) => this.setState({
                    color: value,
                  })}
                  colors={materialColors}
                  mask={null}
                  disabled={isNamedColor}
                />
              </FormField>
              <FormField
                label='opacity'
              >
                <NumberInput
                  disabled={isNamedColor}
                  decimals={2}
                  min={0}
                  max={1}
                  step={0.05}
                  onChange={({ target: { value } }) => this.setState({
                    opacity: parseFloat(value),
                  })}
                  value={opacity}
                />
              </FormField>
            </Box>
          </Box>
          <Box>
            <Box
              border={{
                color: 'white', size: 'medium',
              }}
              background={colorRGB}
              pad='medium'
            >
              <Text>
                {colorForTheme()}
              </Text>
              <Text>
                {colorRGB}
              </Text>
            </Box>
          </Box>

        </Modal>
      );
    }
    return (
      <React.Fragment>
        <Button
          label={(
            <Box direction='row' gap='small'>
              <Text>{`${label}: `}</Text>
              <Box direction='row' gap='xsmall'>
                <Text>{`${initial} `}</Text>
                <ColorBox
                  theme={theme}
                  color={initial}
                  dark={dark}
                />
              </Box>
            </Box>
          )}
          onClick={() => this.setState({
            open: true,
          })}
        />
        {layer}
      </React.Fragment>

    );
  }
}

export default ColorSelect;
