import { Select } from 'grommet';
import { doc } from 'grommet/components/Select/doc';

import Doc from '../components/Doc';

const desc = doc(Select).toJSON();

const stringOptions = ['small', 'medium', 'large', 'xlarge', 'huge'];

export default class SelectDoc extends React.Component {
  state = { size: stringOptions[0] }

  render() {
    const { size } = this.state;
    return (
      <Doc
        name='Select'
        desc={desc}
        example={
          <Select
            options={stringOptions}
            value={size}
            onChange={({ option }) => this.setState({ size: option })}
          />
        }
        examples={{
          dropAlign: (
            <Select
              dropAlign={{ bottom: 'top', right: 'right' }}
              options={stringOptions}
              onChange={({ option }) => this.setState({ size: option })}
            />
          ),
          dropBackground: (
            <Select
              dropBackground='dark-3'
              options={stringOptions}
              onChange={({ option }) => this.setState({ size: option })}
            />
          ),
          onSearch: (
            <Select
              options={stringOptions}
              onSearch={() => {}}
              onChange={({ option }) => this.setState({ size: option })}
            />
          ),
          placeholder: (
            <Select
              placeholder='Choose one'
              options={stringOptions}
              onChange={({ option }) => this.setState({ size: option })}
            />
          ),
          plain: (
            <Select
              plain={true}
              options={stringOptions}
              value={size}
              onChange={({ option }) => this.setState({ size: option })}
            />
          ),
          searchPlaceholder: (
            <Select
              options={stringOptions}
              searchPlaceholder='Type something here'
              onSearch={() => {}}
              onChange={({ option }) => this.setState({ size: option })}
            />
          ),
          value: (
            <Select
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
