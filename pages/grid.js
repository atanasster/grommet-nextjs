import { Box, Grid } from 'grommet';
import { doc } from 'grommet/components/Grid/doc';

import Doc from '../components/Doc';

const desc = doc(Grid).toJSON();

export default () => (
  <Doc
    name='Grid'
    desc={desc}
    example={(
      <Grid
        rows={['xsmall', 'flex']}
        columns={['xsmall', 'flex', 'small']}
        gap='small'
        areas={[
          { name: 'header', start: [0, 0], end: [2, 0] },
          { name: 'nav', start: [0, 1], end: [0, 1] },
          { name: 'main', start: [1, 1], end: [1, 1] },
          { name: 'side', start: [2, 1], end: [2, 1] },
        ]}
      >
        <Box gridArea='header' background='brand' />
        <Box gridArea='nav' background='light-3' />
        <Box gridArea='main' background='light-1' />
        <Box gridArea='side' background='light-2' />
      </Grid>
    )}
  />
);
