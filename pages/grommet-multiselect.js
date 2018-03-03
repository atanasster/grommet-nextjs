import { Box, CheckBox } from 'grommet';
import { MultiSelect } from '../components/grommet/grommet-multiselect';
import doc from '../components/grommet/grommet-multiselect/doc';

import Doc from '../components/Doc';

const desc = doc(MultiSelect).toJSON();

const stringOptions = ['small', 'medium', 'large', 'xlarge', 'huge'];

export default class SelectDoc extends React.Component {
  state = { size: stringOptions[0], multi: [stringOptions[0], stringOptions[2]], tags: true }

  render() {
    const { size, multi, tags } = this.state;
    return (
      <Doc
        name='Grommet Select'
        desc={desc}
        example={
          <Box direction='row'>
            <Box basis='medium' gap='small'>
              <Box direction='row' justify='between'>
                <CheckBox checked={tags} label='Use tags' onChange={() => this.setState({ tags: !tags })} />
              </Box>

              <MultiSelect
                options={stringOptions}
                value={multi}
                multiple={{ tags }}
                placeholder='Add sizes'
                onChange={({ option }) => this.setState({ multi: option })}
              />
            </Box>
          </Box>
        }
        examples={{
          dropAlign: (
            <MultiSelect
              dropAlign={{ bottom: 'top', right: 'right' }}
              options={stringOptions}
              onChange={({ option }) => this.setState({ size: option })}
            />
          ),
          dropBackground: (
            <MultiSelect
              dropBackground='dark-3'
              options={stringOptions}
              onChange={({ option }) => this.setState({ size: option })}
            />
          ),
          onSearch: (
            <MultiSelect
              options={stringOptions}
              onSearch={() => {}}
              onChange={({ option }) => this.setState({ size: option })}
            />
          ),
          placeholder: (
            <MultiSelect
              placeholder='Choose one'
              options={stringOptions}
              onChange={({ option }) => this.setState({ size: option })}
            />
          ),
          plain: (
            <MultiSelect
              plain={true}
              options={stringOptions}
              value={size}
              onChange={({ option }) => this.setState({ size: option })}
            />
          ),
          searchPlaceholder: (
            <MultiSelect
              options={stringOptions}
              searchPlaceholder='Type something here'
              onSearch={() => {}}
              onChange={({ option }) => this.setState({ size: option })}
            />
          ),
          value: (
            <MultiSelect
              options={stringOptions}
              value={size}
              onChange={({ option }) => this.setState({ size: option })}
            />
          ),
        }}
      />
    );
  }
}
