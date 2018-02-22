import { Box, Menu } from 'grommet';
import doc from 'grommet/components/Menu/doc';

import { CaretDown, More } from 'grommet-icons';

import Doc from '../components/Doc';

const desc = doc(Menu).toJSON();

function onClick(event) {
  event.preventDefault();
  alert('hi');
}

export default () => (
  <Doc name='Menu' desc={desc}>
    <Box pad='large'>
      <Box direction='row' wrap={true} align='center'>
        <Box margin='small'>
          <Menu
            label='Menu'
            items={[
              {
                label: 'First Action',
                onClick,
              },
              {
                label: 'Second Action',
                onClick,
              },
            ]}
          />
        </Box>
        <Box margin='small'>
          <Menu
            icon={<CaretDown color='brand' />}
            label='Menu 2'
            items={[
              {
                label: 'First Action',
                onClick,
              },
              {
                label: 'Second Action',
                onClick,
              },
            ]}
          />
        </Box>
        <Box margin='small'>
          <Menu
            dropAlign={{ top: 'top', right: 'right' }}
            background='neutral-4'
            icon={<More color='brand' />}
            items={[
              {
                label: 'First Action',
                onClick,
              },
              {
                label: 'Second Action',
                onClick,
              },
            ]}
          />
        </Box>
      </Box>
    </Box>
  </Doc>
);
