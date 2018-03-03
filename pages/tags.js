import { GrommetTags } from '../components/grommet/grommet-tags';
import doc from '../components/grommet/grommet-tags/doc';

import Doc from '../components/Doc';

const desc = doc(GrommetTags).toJSON();

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
          <GrommetTags
            options={stringOptions}
            value={selected}
            onChange={({ option }) => this.setState({ selected: option })}
          />
        }
        examples={{
          tagBackground: (
            <GrommetTags
              tagBackground='dark-3'
              options={stringOptions}
              onChange={({ option }) => this.setState({ selected: option })}
            />
          ),
          onSearch: (
            <GrommetTags
              options={stringOptions}
              onSearch={() => {}}
              onChange={({ option }) => this.setState({ selected: option })}
            />
          ),
          placeholder: (
            <GrommetTags
              placeholder='Choose one'
              options={stringOptions}
              onChange={({ option }) => this.setState({ selected: option })}
            />
          ),
          plain: (
            <GrommetTags
              plain={true}
              options={stringOptions}
              value={selected}
              onChange={({ option }) => this.setState({ selected: option })}
            />
          ),
          searchPlaceholder: (
            <GrommetTags
              options={stringOptions}
              searchPlaceholder='Type something here'
              onSearch={() => {}}
              onChange={({ option }) => this.setState({ selected: option })}
            />
          ),
          value: (
            <GrommetTags
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
