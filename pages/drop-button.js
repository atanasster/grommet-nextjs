import { Box, DropButton } from 'grommet';
import doc from 'grommet/components/DropButton/doc';

import Doc from '../components/Doc';
import AirlineMultiSelect from '../components/drop-button/AirlineMultiSelect';
import LabelMultiSelect from '../components/drop-button/LabelMultiSelect';

const desc = doc(DropButton).toJSON();

export default class DropButtonDoc extends React.Component {
  render() {
    return (
      <Doc
        name='DropButton'
        desc={desc}
        example={(
          <Box flex={true} justify='center' align='center'>
            <Box align='start'>
              <Box direction='row' margin={{ vertical: 'medium' }}>
                <AirlineMultiSelect />
              </Box>
              <Box direction='row' margin={{ vertical: 'medium' }}>
                <LabelMultiSelect />
              </Box>
            </Box>
          </Box>
        )}
      />
    );
  }
}
