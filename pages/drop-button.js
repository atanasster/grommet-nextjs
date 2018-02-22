import { Box, DropButton } from 'grommet';
import doc from 'grommet/components/DropButton/doc';

import Doc from '../components/Doc';
import AirlineMultiSelect from '../components/drop-button/AirlineMultiSelect';
import LabelMultiSelect from '../components/drop-button/LabelMultiSelect';

const desc = doc(DropButton).toJSON();

export default class DropButtonDoc extends React.Component {
  render() {
    return (
      <Doc name='DropButton' desc={desc}>
        <Box pad='large'>
          <Box direction='row'>
            <AirlineMultiSelect />
          </Box>
          <Box direction='row' margin={{ vertical: 'small' }}>
            <LabelMultiSelect />
          </Box>
        </Box>
      </Doc>
    );
  }
}
