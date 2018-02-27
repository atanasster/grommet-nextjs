import { Box } from 'grommet';
import { withTheme } from 'grommet/components/hocs';

export default withTheme(({ theme, basis = 'small' }) => {
  const colors = ['brand'];
  theme.global.colors.accent.forEach((_, index) => colors.push(`accent-${index + 1}`));
  theme.global.colors.neutral.forEach((_, index) => colors.push(`neutral-${index + 1}`));
  if (theme.global.colors.status) {
    Object.keys(theme.global.colors.status).forEach(key => colors.push(`status-${key}`));
  }
  const roll = colors.map(color => (
    <Box key={color} basis={basis} pad='small' background={color}>{color}</Box>
  ));
  return (
    <Box flex={true} direction='row' wrap={true} fill='horizontal'>
      {roll}
    </Box>
  );
});
