import { Box } from 'grommet';

import Doc from '../components/Doc';

export default () => (
  <Doc name='Color'>
    <Box pad='large'>
      <Box flex={true} basis='small' direction='row' wrap={true}>
        <Box basis='small' pad='small' background='brand'>brand</Box>
      </Box>
      <Box flex={true} basis='small' direction='row' wrap={true}>
        {['accent-1', 'accent-2',
        ].map(color => (
          <Box key={color} basis='small' pad='small' background={color}>{color}</Box>
        ))}
      </Box>
      <Box flex={true} basis='small' direction='row' wrap={true}>
        {['neutral-1', 'neutral-2', 'neutral-3',
        ].map(color => (
          <Box key={color} basis='small' pad='small' background={color}>{color}</Box>
        ))}
      </Box>
      <Box flex={true} basis='small' direction='row' wrap={true}>
        {['status-ok', 'status-warning', 'status-critical',
          'status-disabled',
        ].map(color => (
          <Box key={color} basis='small' pad='small' background={color}>{color}</Box>
        ))}
      </Box>
    </Box>
  </Doc>
);
