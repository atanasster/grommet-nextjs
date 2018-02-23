import { RadioButton } from 'grommet';
import doc from 'grommet/components/RadioButton/doc';

import Doc from '../components/Doc';

const desc = doc(RadioButton).toJSON();

export default () => (
  <Doc
    name='RadioButton'
    desc={desc}
    examples={{
      checked: <RadioButton label='A' checked={true} onChange={() => {}} />,
      disabled: <RadioButton label='A' disabled={true} onChange={() => {}} />,
      label: <RadioButton label='A' onChange={() => {}} />,
    }}
  />
);
