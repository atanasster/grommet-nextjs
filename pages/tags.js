import { Tags } from 'grommet-controls';
import doc from 'grommet-controls/components/Tags/doc';

import Doc from '../components/Doc';

const desc = doc(Tags).toJSON();

const stringOptions = ['small', 'medium', 'large', 'xlarge', 'huge'];

export default class TagsDoc extends React.Component {
  state = { selected: [stringOptions[0]] }

  render() {
    const { selected } = this.state;
    return (
      <Doc
        name='Grommet Tags'
        desc={desc}
        example={
          <Tags
            options={stringOptions}
            value={selected}
            onChange={({ option }) => this.setState({ selected: option })}
          />
        }
        examples={{
          tagBackground: (
            <Tags
              tagBackground='dark-3'
              options={stringOptions}
              onChange={({ option }) => this.setState({ selected: option })}
            />
          ),
          onSearch: (
            <Tags
              options={stringOptions}
              onSearch={() => {}}
              onChange={({ option }) => this.setState({ selected: option })}
            />
          ),
          placeholder: (
            <Tags
              placeholder='Choose one'
              options={stringOptions}
              onChange={({ option }) => this.setState({ selected: option })}
            />
          ),
          plain: (
            <Tags
              plain={true}
              options={stringOptions}
              value={selected}
              onChange={({ option }) => this.setState({ selected: option })}
            />
          ),
          searchPlaceholder: (
            <Tags
              options={stringOptions}
              searchPlaceholder='Type something here'
              onSearch={() => {}}
              onChange={({ option }) => this.setState({ selected: option })}
            />
          ),
          value: (
            <Tags
              options={stringOptions}
              value={selected}
              onChange={({ option }) => this.setState({ selected: option })}
            />
          ),
        }}
      />
    );
  }
}
