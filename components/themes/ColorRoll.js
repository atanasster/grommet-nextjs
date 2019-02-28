import React from 'react';
import { Box, Grid, Text } from 'grommet';
import { normalizeColor } from 'grommet/utils';
import { ThemeContext } from 'styled-components';
import { Card } from 'grommet-controls';

const getRGB = (color) => {
  if (typeof color.match === 'function') {
    const [red, green, blue] = color.match(/[A-Za-z0-9]{2}/g).map(v => parseInt(v, 16));
    return `rgb(${red}, ${green}, ${blue})`;
  }
  return `err: ${color}`;
};

const ColorsBox = ({ colors, theme, title }) => (
  <Box fill='horizontal'>
    <Text weight='bold' size='large' margin={{ vertical: 'small' }}>
      {title}
    </Text>
    <Grid columns='small' rows='small' gap='xsmall'>
      {colors.map((color) => {
        const colorValue = normalizeColor(color, theme);
        return (
          <Card key={color} background='white' gap={null}>
            <Card.CardTitle>
              {color}
            </Card.CardTitle>
            <Card.CardContent background={color}>
              <Box fill={true} align='center' justify='center'>
                <Box gap='medium'>
                  <Text>{`HEX: ${colorValue}`}</Text>
                  <Text>{`RGB: ${getRGB(colorValue)}`}</Text>
                </Box>
              </Box>
            </Card.CardContent>
          </Card>
        );
      })
      }
    </Grid>
  </Box>
);

const SmallColorsBox = ({ colors }) => (
  <Grid columns='xsmall' rows='xsmall' gap='xsmall'>
    {colors.map(color => (
      <Box key={color} background={color} align='center'>
        <Box justify='center' fill='vertical'>
          <Text weight='bold'>{color}</Text>
        </Box>
      </Box>
      ))
    }
  </Grid>
);
export default ({ size = 'large' }) => {
  let ColorComponent;

  if (size === 'small') {
    ColorComponent = SmallColorsBox;
  } else {
    ColorComponent = ColorsBox;
  }
  const colorsArray = (theme, prefix) => (
    Object.keys(theme.global.colors)
      .filter(key => key.startsWith(prefix))
  );
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Box gap={size} fill='horizontal'>
          <ColorComponent colors={colorsArray(theme, 'brand')} title='brand' theme={theme} />
          <ColorComponent colors={colorsArray(theme, 'accent')} title='accent' theme={theme} />
          <ColorComponent colors={colorsArray(theme, 'neutral')} title='neutral' theme={theme} />
          <ColorComponent colors={colorsArray(theme, 'status')} title='status' theme={theme} />
          <ColorComponent colors={colorsArray(theme, 'light')} title='light' theme={theme} />
          <ColorComponent colors={colorsArray(theme, 'dark')} title='dark' theme={theme} />
        </Box>
      )
      }
    </ThemeContext.Consumer>
  );
};
