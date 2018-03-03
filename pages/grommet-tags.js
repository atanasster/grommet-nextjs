import { Box } from 'grommet';

import { GrommetTags } from '../components/grommet/grommet-tags';
import doc from '../components/grommet/grommet-tags/doc';

import Doc from '../components/Doc';

const desc = doc(GrommetTags).toJSON();

const stringOptions = ['small', 'medium', 'large', 'xlarge', 'huge'];

export default class SelectDoc extends React.Component {
  state = { multi: [stringOptions[0], stringOptions[2]] }

  render() {
    const { multi } = this.state;
    return (
      <Doc
        name='Grommet Tags'
        desc={desc}
        example={
          <Box direction='row'>
            <GrommetTags
              value={multi}
              border='small'
              basis='medium'
              pad='xsmall'
              placeholder='No selection'
              onChange={({ option }) => this.setState({ multi: option })}
            />
          </Box>
        }
        examples={{
          tagProps: (
            <GrommetTags
              tagProps={{ background: 'dark-3', size: 'small', color: 'status-critical' }}
              value={stringOptions}
            />
          ),
          placeholder: (
            <GrommetTags
              placeholder='No selection'
              value={stringOptions}
            />
          ),
          plain: (
            <GrommetTags
              plain={true}
              value={multi}
            />
          ),
          value: (
            <GrommetTags
              value={multi}
            />
          ),
        }}
      />
    );
  }
}
