import React from 'react';
import { Box, Grid, Text } from 'grommet';
import { ThemeContext } from 'grommet/contexts';
import { Card } from 'grommet-controls';
import Page from '../components/app/Page';

const getRGB = (color) => {
  if (typeof color.match === 'function') {
    const [red, green, blue] = color.match(/[A-Za-z0-9]{2}/g).map(v => parseInt(v, 16));
    return `rgb(${red}, ${green}, ${blue})`;
  }
  return `err: ${color}`;
};

const ColorsBox = ({ colors, prefix }) => (
  <Box>
    <Text weight='bold' size='large' margin={{ vertical: 'small' }}>
      {prefix}
    </Text>
    <Grid columns='small' rows='small' gap='small'>
      {Object.keys(colors)
        .filter(key => key.startsWith(prefix))
        .map(key => colors[key] && (
          <Card key={key} background='white' gap={null}>
            <Card.CardTitle>
              {key}
            </Card.CardTitle>
            <Card.CardContent background={key} pad={null}>
              <Box fill={true} align='center'justify='center'>
                <Box gap='medium'>
                  <Text>{`HEX: ${colors[key]}`}</Text>
                  <Text>{`RGB: ${getRGB(colors[key])}`}</Text>
                </Box>
              </Box>
            </Card.CardContent>
          </Card>
        ))
      }
    </Grid>
  </Box>
);
export default () => (
  <Page title='Colors'>
    <Box pad={{ horizontal: 'large' }} >
      <ThemeContext.Consumer>
        {theme => (
          <Box gap='large'>
            <ColorsBox colors={theme.global.colors} prefix='brand' />
            <ColorsBox colors={theme.global.colors} prefix='accent' />
            <ColorsBox colors={theme.global.colors} prefix='neutral' />
            <ColorsBox colors={theme.global.colors} prefix='status' />
            <ColorsBox colors={theme.global.colors} prefix='light' />
            <ColorsBox colors={theme.global.colors} prefix='dark' />
          </Box>
          )
        }
      </ThemeContext.Consumer>
    </Box>
  </Page>
);
