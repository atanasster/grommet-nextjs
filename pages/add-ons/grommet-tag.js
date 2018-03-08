import { Box } from 'grommet';
import { Github, Grommet, FormSubtract } from 'grommet-icons';
import { GrommetTag } from '../../components/grommet/grommet-tag/index';
import doc from '../../components/grommet/grommet-tag/doc';
import Doc from '../../components/Doc';

const desc = doc(GrommetTag).toJSON();
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
        name='Grommet Tag'
        desc={desc}
        example={
          <Box gap='large'>
            <Box direction='row'>
              <GrommetTag />
            </Box>
          </Box>
        }
        examples={{
          a11yTitle: (
            <GrommetTag
              a11yTitle='Tag component'
            />
          ),
          icon: (
            <GrommetTag
              icon={<FormSubtract />}
            />
          ),
          disabled: (
            <GrommetTag
              disabled={true}
              label='Disabled'
            />
          ),
          focusable: (
            <GrommetTag
              focusable={false}
              label='Cant focus'
            />
          ),
          background: (
            <GrommetTag
              background='accent-1'
              label='accent-1'
            />
          ),
          border: (
            <GrommetTag
              border={{ side: 'all', size: 'medium', color: 'accent-1' }}
              round='medium'
              label='border'
            />
          ),
          round: (
            <GrommetTag
              round='medium'
              background='white'
              label='border'
            />
          ),
          onClick: (
            <GrommetTag
              onClick={() => alert('Clicked on label')}
            />
          ),
          onChange: (
            <GrommetTag
              icon={tagIcons[iconIndex]}
              onClick={() => alert('Clicked on label')}
              onChange={this.onToggle}
            />
          ),
          reverse: (
            <GrommetTag
              reverse={true}
              label='Adam'
            />
          ),
          size: (
            <GrommetTag
              size='large'
              label='Large'
            />
          ),
        }}
      />
    );
  }
}
