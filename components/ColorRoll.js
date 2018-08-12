import { Box, Text } from 'grommet';
import { withTheme } from 'grommet/components/hocs';
import { colorForName } from 'grommet/utils/colors';

const colorList = (theme, prefix) =>
  Object.keys(theme.global.colors).filter(c => c.startsWith(prefix));

export default withTheme(({ theme, basis = 'small', extended = false }) => {
  let colors = ['brand'];
  colors = [...colors, ...colorList(theme, 'accent')];
  colors = [...colors, ...colorList(theme, 'neutral')];
  colors = [...colors, ...colorList(theme, 'status')];
  if (extended) {
    colors = [...colors, ...colorList(theme, 'light')];
    colors = [...colors, ...colorList(theme, 'dark')];
  }

  function parseHexToRGB(color) {
  // https://stackoverflow.com/a/42429333
    if (!color.match) {
      console.log('no match', color);
      return [255, 255, 255];
    }
    return color.match(/[A-Za-z0-9]{2}/g).map(v => parseInt(v, 16));
  }


  function getRGBArray(color) {
    if (/^#/.test(color)) {
      return parseHexToRGB(color);
    } else if (/^rgb/.test(color)) {
      return color.match(/rgba?\((\s?[0-9]*\s?),(\s?[0-9]*\s?),(\s?[0-9]*\s?).*?\)/).splice(1);
    }
    return color;
  }
  const colorIsDark = (color) => {
    const [red, green, blue] = getRGBArray(color);
    // http://www.had2know.com/technology/
    //  color-contrast-calculator-web-design.html
    const brightness = (
      (299 * red) + (587 * green) + (114 * blue)
    ) / 1000;
    return (brightness < 125);
  };
  const darkColor = colorIsDark(theme.global.colors.text) ?
    theme.global.text.color.light : theme.global.text.color.dark;
  const lightColor = colorIsDark(theme.global.colors.text) ?
    theme.global.text.color.dark : theme.global.text.color.light;
  const roll = colors.map((color, index) => {
    const rgb = colorForName(color, theme);
    const textColor = colorIsDark(rgb) ? lightColor : darkColor;
    return (
      <Box key={`rgb-${index}`} basis={basis} pad='small' background={rgb}>
        {basis === 'small' && (
          <Text color={textColor}>
            {color}
          </Text>
        )}
      </Box>
    );
  });
  return (
    <Box flex={true} direction='row' wrap={true} fill='horizontal'>
      {roll}
    </Box>
  );
});
