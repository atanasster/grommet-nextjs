import { RangeInput } from 'grommet';
import { doc } from 'grommet/components/RangeInput/doc';

import Doc from '../components/Doc';

const desc = doc(RangeInput).toJSON();

class RangeInputDoc extends React.Component {
  state = {
    value: 0,
  }
  render() {
    const { value } = this.state;
    return (
      <Doc
        name='RangeInput'
        desc={desc}
        examples={{
          value: (
            <RangeInput
              value={value}
              onChange={event => this.setState({ value: event.target.value })}
            />
          ),
        }}
      />
    );
  }
}

export default RangeInputDoc;
