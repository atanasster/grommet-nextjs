import React from 'react';
import { Box, Button } from 'grommet';
import { FormSubtract, Trash } from 'grommet-icons';
import { Tags } from 'grommet-controls';
import doc from 'grommet-controls/components/Tags/doc';
import Doc from '../../components/Doc';

const desc = doc(Tags).toJSON();

const stringOptions = ['small', 'medium', 'large', 'xlarge', 'huge'];
const defaultTags = [stringOptions[0], stringOptions[2]];

export default class TagsDoc extends React.Component {
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
        name='Tags'
        desc={desc}
        example={
          <Box gap='large'>
            <Box direction='row'>
              <Tags
                value={tags}
                border='all'
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
            <Tags
              a11yTitle='Grommet tags'
              value={tags}
            />
          ),
          children: (
            <Tags
              value={tags}
              focusable={false}
              onChange={this.onChangeTags}
            >
              {(tag, index) => (
                <Box key={`remove_${index}`} pad={{ horizontal: 'xsmall' }}>
                  <Button label={tag} icon={<Trash />} onClick={() => this.removeTag(index)} />
                </Box>
              )}
            </Tags>
          ),
          icon: (
            <Tags
              icon={<FormSubtract />}
              onChange={this.onChangeTags}
              value={tags}
            />
          ),

          direction: (
            <Tags
              direction='column'
              onChange={this.onChangeTags}
              value={tags}
            />
          ),
          tagProps: (
            <Tags
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
            <Tags
              onClick={(e, option) => alert(`Clicked on ${option}`)}
              onChange={this.onChangeTags}
              value={tags}
            />
          ),
          focusable: (
            <Tags
              focusable={false}
              onChange={this.onChangeTags}
              value={tags}
            />
          ),
          placeholder: (
            <Tags
              placeholder='No selection'
            />
          ),
          value: (
            <Tags
              value='tag'
            />
          ),
        }}
      />
    );
  }
}
