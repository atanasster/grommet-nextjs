import { Box, Text } from 'grommet';
import { ThemeContext } from 'grommet/contexts';

const colorList = (theme, prefix) =>
  Object.keys(theme.global.colors).filter(c => c.startsWith(prefix));

export default ({ basis = 'small', extended = false }) => {
  const roll = (theme) => {
    let colors = ['brand'];
    colors = [...colors, ...colorList(theme, 'accent')];
    colors = [...colors, ...colorList(theme, 'neutral')];
    colors = [...colors, ...colorList(theme, 'status')];
    if (extended) {
      colors = [...colors, ...colorList(theme, 'light')];
      colors = [...colors, ...colorList(theme, 'dark')];
    }


    return colors.map((color, index) => {
      const rgb = theme.global.colors[color];
      return (
        <Box key={`rgb-${index}`} basis={basis} pad='small' background={rgb}>
          {basis === 'small' && (
            <Text>
              {color}
            </Text>
          )}
        </Box>
      );
    });
  };
  return (
    <Box flex={true} direction='row' wrap={true} fill='horizontal'>
      <ThemeContext.Consumer>
        {theme => roll(theme)}
      </ThemeContext.Consumer>
    </Box>
  );
};
