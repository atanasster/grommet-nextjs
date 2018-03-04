import { Box, Button } from 'grommet';
import { FormSubtract, Trash } from 'grommet-icons';
import { GrommetTags } from '../components/grommet/grommet-tags';
import doc from '../components/grommet/grommet-tags/doc';
import Doc from '../components/Doc';

const desc = doc(GrommetTags).toJSON();

const stringOptions = ['small', 'medium', 'large', 'xlarge', 'huge'];
const defaultTags = [stringOptions[0], stringOptions[2]];

export default class SelectDoc extends React.Component {
  state = { tags: defaultTags };

  onChangeTags = ({ option }) => {
    this.setState({ tags: option });
  };
  resetTags = () => {
    this.setState({ tags: defaultTags });
  };

  removeTag = (tagIndex) => {
    this.setState({ tags: this.state.tags.filter((_, index) => index !== tagIndex) });
  }
  render() {
    const { tags } = this.state;
    return (
      <Doc
        name='Grommet Tags'
        desc={desc}
        example={
          <Box gap='large'>
            <Box direction='row'>
              <GrommetTags
                value={tags}
                border='small'
                basis='medium'
                placeholder='No selection'
                onChange={this.onChangeTags}
              />
            </Box>
            <Box direction='row' justify='start'>
              <Button primary={true} label='Reset tags' onClick={this.resetTags} />
            </Box>
          </Box>
        }
        examples={{
          a11yTitle: (
            <GrommetTags
              a11yTitle='Grommet tags'
              value={tags}
            />
          ),
          children: (
            <GrommetTags
              value={tags}
              onChange={this.onChangeTags}
            >
              {(tag, index) => (
                <Box key={`remove_${index}`} pad={{ horizontal: 'xsmall' }}>
                  <Button label={tag} icon={<Trash />} onClick={() => this.removeTag(index)} />
                </Box>
              )}
            </GrommetTags>
          ),
          icon: (
            <GrommetTags
              icon={<FormSubtract />}
              onChange={this.onChangeTags}
              value={tags}
            />
          ),

          direction: (
            <GrommetTags
              direction='column'
              onChange={this.onChangeTags}
              value={tags}
            />
          ),
          tagProps: (
            <GrommetTags
              tagProps={{
                background: 'status-critical',
                size: 'large',
                border: { color: 'brand', size: 'medium' },
              }}
              onChange={this.onChangeTags}
              value={tags}
            />
          ),
          onClick: (
            <GrommetTags
              onClick={(e, option) => alert(`Clicked on ${option}`)}
              onChange={this.onChangeTags}
              value={tags}
            />
          ),
          placeholder: (
            <GrommetTags
              placeholder='No selection'
            />
          ),
          value: (
            <GrommetTags
              value='tag'
            />
          ),
        }}
      />
    );
  }
}
