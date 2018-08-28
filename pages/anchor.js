import { Anchor, Box } from 'grommet';
import { doc } from 'grommet/components/Anchor/doc';

import { Edit } from 'grommet-icons';

import Doc from '../components/Doc';

const desc = doc(Anchor).toJSON();

export default () => (
  <Doc
    name='Anchor'
    desc={desc}
    example={(
      <Box flex={true} justify='center' align='center'>
        <Anchor href='#' primary={true} label='For Example' />
      </Box>
    )}
    examples={{
      icon: <Anchor href='#' icon={<Edit />} />,
      label: <Anchor href='#' label='Edit' />,
      primary: <Anchor href='#' primary={true} label='Edit' />,
      reverse: <Anchor href='#' icon={<Edit />} label='Edit' reverse={true} />,
    }}
  />
);
