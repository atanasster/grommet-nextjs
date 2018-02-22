import { Box, Grid } from 'grommet';
import doc from 'grommet/components/Grid/doc';

import Doc from '../components/Doc';

const desc = doc(Grid).toJSON();

export default () => (
  <Doc name='Grid' desc={desc}>
    <Grid
      rows={['xxsmall', 'medium', 'xsmall']}
      columns={['3/4', '1/4']}
      areas={[
        { name: 'header', start: [0, 0], end: [1, 0] },
        { name: 'main', start: [0, 1], end: [0, 1] },
        { name: 'sidebar', start: [1, 1], end: [1, 1] },
        { name: 'footer', start: [0, 2], end: [1, 2] },
      ]}
      gap='small'
    >
      <Box
        align='center'
        justify='center'
        pad='medium'
        background='neutral-1'
        gridArea='header'
      >
        Header
      </Box>
      <Box
        align='center'
        justify='center'
        pad='medium'
        background='light-1'
        gridArea='main'
      >
        Main
      </Box>
      <Box
        align='center'
        justify='center'
        pad='medium'
        background='light-2'
        gridArea='sidebar'
      >
        Sidebar
      </Box>
      <Box
        align='center'
        justify='center'
        pad='medium'
        background='dark-1'
        gridArea='footer'
      >
        Footer
      </Box>
    </Grid>
  </Doc>
);
