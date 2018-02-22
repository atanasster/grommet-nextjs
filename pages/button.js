import { Box, Button, Heading } from 'grommet';
import doc from 'grommet/components/Button/doc';

import { Facebook } from 'grommet-icons';

import Doc from '../components/Doc';

const desc = doc(Button).toJSON();

function onClick() {
  alert('hi');
}

export default () => (
  <Doc name='Button' desc={desc}>
    <Box pad='large' align='start'>
      <Box margin='small'>
        <Button label='Default' onClick={onClick} />
      </Box>
      <Box margin='small'>
        <Button label='Primary' primary={true} onClick={onClick} />
      </Box>
      <Box margin='small'>
        <Button label='Secondary' secondary={true} onClick={onClick} />
      </Box>
      <Box margin='small'>
        <Button label='Accent' accent={true} onClick={onClick} />
      </Box>
      <Box margin='small'>
        <Button label='Critical' critical={true} onClick={onClick} />
      </Box>
      <Box margin='small'>
        <Button icon={<Facebook color='plain' />} onClick={onClick} />
      </Box>
      <Box margin='small'>
        <Button
          plain={true}
          hoverIndicator='background'
          onClick={onClick}
          textAlign='start'
        >
          <Box margin='small'>
            <span>Box with</span>
            <Heading level={2} margin='none'>Heading</Heading>
          </Box>
        </Button>
      </Box>
    </Box>
  </Doc>
);
