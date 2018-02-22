import { Box, Paragraph, Stack, Text } from 'grommet';
import doc from 'grommet/components/Stack/doc';

import Doc from '../components/Doc';

const desc = doc(Stack).toJSON();

export default () => (
  <Doc
    name='Stack'
    desc={desc}
    example={(
      <Stack anchor='center'>
        <Box
          border={{ color: 'brand', size: 'large' }}
          align='center'
          justify='center'
          pad='large'
          round='medium'
        >
          <Paragraph>
            {`You know, sometimes in life it seems like there's no way out. Like
            a sheep trapped in a maze designed by wolves.`}
          </Paragraph>
        </Box>
        <Box
          background={{ color: 'white', opacity: 'weak' }}
          pad='medium'
          round='medium'
        >
          <Text size='large'><strong>Hey!</strong></Text>
        </Box>
      </Stack>
    )}
    examples={{
      anchor: (
        <Box>
          <Box margin='xsmall'>
            <Stack anchor='top-left'>
              <Box pad='small' border={true}><strong>AAA</strong></Box>
              <Box pad='xsmall' background={{ color: 'light-3', opacity: 'medium' }}>bb</Box>
            </Stack>
          </Box>
          <Box margin='xsmall'>
            <Stack anchor='left'>
              <Box pad='small' border={true}><strong>CCC</strong></Box>
              <Box pad='xsmall' background={{ color: 'light-3', opacity: 'medium' }}>dd</Box>
            </Stack>
          </Box>
          <Box margin='xsmall'>
            <Stack anchor='center'>
              <Box pad='small' border={true}><strong>EEE</strong></Box>
              <Box pad='xsmall' background={{ color: 'light-3', opacity: 'medium' }}>gg</Box>
            </Stack>
          </Box>
        </Box>
      ),
    }}
  />
);
