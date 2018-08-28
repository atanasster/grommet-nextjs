import { Drop } from 'grommet';
import { doc } from 'grommet/components/Drop/doc';

import Doc from '../components/Doc';

const desc = doc(Drop).toJSON();

export default class DropDoc extends React.Component {
  render() {
    return (
      <Doc
        name='Drop'
        desc={desc}
      />
    );
  }
}
