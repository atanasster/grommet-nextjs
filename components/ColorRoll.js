import { Box, Text } from 'grommet';
import { withTheme } from 'grommet/components/hocs';
import { colorIsDark, colorForName } from 'grommet/utils/colors';

export default withTheme(({ theme, basis = 'small', extended = false }) => {
  const colors = ['brand'];
  theme.global.colors.accent.forEach((_, index) => colors.push(`accent-${index + 1}`));
  theme.global.colors.neutral.forEach((_, index) => colors.push(`neutral-${index + 1}`));
  if (theme.global.colors.status) {
    Object.keys(theme.global.colors.status).forEach(key => colors.push(`status-${key}`));
  }
  if (extended) {
    theme.global.colors.light.forEach((_, index) => colors.push(`light-${index + 1}`));
    theme.global.colors.dark.forEach((_, index) => colors.push(`dark-${index + 1}`));
  }
  const darkColor = colorIsDark(theme.global.colors.text) ?
    theme.global.colors.text : theme.global.colors.background;
  const lightColor = colorIsDark(theme.global.colors.text) ?
    theme.global.colors.background : theme.global.colors.text;
  const roll = colors.map((color) => {
    const rgb = colorForName(color, theme);
    const textColor = colorIsDark(rgb) ? lightColor : darkColor;
    return (
      <Box key={color} basis={basis} pad='small' background={color}>
        <Text color={textColor}>
          {color}
        </Text>
      </Box>
    );
  });
  return (
    <Box flex={true} direction='row' wrap={true} fill='horizontal'>
      {roll}
    </Box>
  );
});
