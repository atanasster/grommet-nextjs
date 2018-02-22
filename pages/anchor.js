import { Anchor, Box } from 'grommet';
import doc from 'grommet/components/Anchor/doc';

import { Edit } from 'grommet-icons';

import Doc from '../components/Doc';

const desc = doc(Anchor).toJSON();

function onClick(event) {
  event.preventDefault();
  alert('hi');
}

export default () => (
  <Doc name='Anchor' desc={desc}>
    <Box pad='large' align='start'>
      <Box margin='small'>
        <Anchor href='#' onClick={onClick}>
          Child text
        </Anchor>
      </Box>
      <Box margin='small'>
        <Anchor href='#' label='Label' primary={true} onClick={onClick} />
      </Box>
      <Box margin='small'>
        <Anchor
          href='#'
          icon={<Edit />}
          label='Label'
          onClick={onClick}
        />
      </Box>
      <Box margin='small'>
        <Anchor
          href='#'
          icon={<Edit />}
          label='Reverse'
          reverse={true}
          onClick={onClick}
        />
      </Box>
      <Box margin='small'>
        <Anchor
          href='#'
          icon={<Edit />}
          label='Disabled'
          disabled={true}
          onClick={onClick}
        />
      </Box>
      <Box margin='small'>
        <Anchor
          href='#'
          icon={<Edit />}
          onClick={onClick}
        />
      </Box>
    </Box>
  </Doc>
);
