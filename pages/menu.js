import { Menu } from 'grommet';
import doc from 'grommet/components/Menu/doc';

import { More } from 'grommet-icons';

import Doc from '../components/Doc';

const desc = doc(Menu).toJSON();

function onClick(event) {
  event.preventDefault();
  alert('hi');
}

export default () => (
  <Doc
    name='Menu'
    desc={desc}
    examples={{
      icon: (
        <Menu
          dropAlign={{ top: 'top', right: 'right' }}
          background='neutral-4'
          icon={<More color='brand' />}
          items={[
            { label: 'First Action', onClick },
            { label: 'Second Action', onClick },
          ]}
        />
      ),
      label: (
        <Menu
          label='Menu'
          items={[
            { label: 'First Action', onClick },
            { label: 'Second Action', onClick },
          ]}
        />
      ),
    }}
  />
);
