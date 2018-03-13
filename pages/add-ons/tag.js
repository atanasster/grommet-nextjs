import { Box } from 'grommet';
import { Github, Grommet, FormSubtract } from 'grommet-icons';
import { Tag } from 'grommet-controls';
import doc from 'grommet-controls/components/Tag/doc';
import Doc from '../../components/Doc';

const desc = doc(Tag).toJSON();
const tagIcons = [<Github />, <Grommet />];

export default class TagDoc extends React.Component {
  state = { iconIndex: 0 };

  onToggle = () => {
    this.setState({ iconIndex: 1 - this.state.iconIndex });
  };
  render() {
    const { iconIndex } = this.state;
    return (
      <Doc
        name='Tag'
        desc={desc}
        example={
          <Box gap='large'>
            <Box direction='row'>
              <Tag />
            </Box>
          </Box>
        }
        examples={{
          a11yTitle: (
            <Tag
              a11yTitle='Tag component'
            />
          ),
          icon: (
            <Tag
              icon={<FormSubtract />}
            />
          ),
          disabled: (
            <Tag
              disabled={true}
              label='Disabled'
            />
          ),
          focusable: (
            <Tag
              focusable={false}
              label='Cant focus'
            />
          ),
          background: (
            <Tag
              background='accent-1'
              label='accent-1'
            />
          ),
          border: (
            <Tag
              border={{ side: 'all', size: 'medium', color: 'accent-1' }}
              round='medium'
              label='border'
            />
          ),
          round: (
            <Tag
              round='medium'
              background='white'
              label='border'
            />
          ),
          onClick: (
            <Tag
              onClick={() => alert('Clicked on label')}
            />
          ),
          onChange: (
            <Tag
              icon={tagIcons[iconIndex]}
              onClick={() => alert('Clicked on label')}
              onChange={this.onToggle}
            />
          ),
          reverse: (
            <Tag
              reverse={true}
              label='Adam'
            />
          ),
          size: (
            <Tag
              size='large'
              label='Large'
            />
          ),
        }}
      />
    );
  }
}
