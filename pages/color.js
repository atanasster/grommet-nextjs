import { Box } from 'grommet';
import { withTheme } from 'grommet/components/hocs';
import Doc from '../components/Doc';
import { themeColors } from '../utils/theme';

export default withTheme(({ theme }) => (
  <Doc name='Color'>
    <Box pad='large'>
      <Box flex={true} basis='medium' direction='row' wrap={true}>
        {themeColors(theme).map(color => (
          <Box key={color} basis='small' pad='small' background={color}>{color}</Box>
        ))}
      </Box>
    </Box>
  </Doc>
));
