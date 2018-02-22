import { Box, Calendar } from 'grommet';
import doc from 'grommet/components/Calendar/doc';

import Doc from '../components/Doc';

const desc = doc(Calendar).toJSON();

export default class extends React.Component {
  state = { date: (new Date()).toISOString() }

  render() {
    const { date } = this.state;
    return (
      <Doc
        name='Calendar'
        desc={desc}
        example={
          <Box align='center'>
            <Calendar
              date={date}
              onSelect={nextDate => this.setState({ date: nextDate })}
            />
          </Box>
        }
      />
    );
  }
}
