import { Box, Button, Heading, Stack, Video } from 'grommet';
import { PlayFill as Play, Revert, Share } from 'grommet-icons';
import doc from 'grommet/components/Video/doc';

import Doc from '../components/Doc';

const desc = doc(Video).toJSON();

const CONTENT = [
  <source key='video' src='/assets/small.mp4' type='video/mp4' />,
  <track
    key='cc'
    label='English'
    kind='subtitles'
    srcLang='en'
    src='/assets/small-en.vtt'
    default={true}
  />,
];

const CONTENT2 = [...CONTENT,
  <track
    key='cc2'
    label='French'
    kind='subtitles'
    srcLang='fr'
    src='/assets/small-fr.vtt'
  />,
];

class Stacked extends React.Component {
  constructor() {
    super();
    this.state = { state: 'before' };
  }
  render() {
    const { state } = this.state;
    let over;
    if (state === 'before') {
      over = (
        <Box justify='center' align='center'>
          <Button onClick={() => this.setState({ state: 'during' })}>
            <Box
              pad='large'
              round='medium'
              background={{ color: 'light-4', opacity: 'weak' }}
            >
              <Play size='large' color='brand' />
            </Box>
          </Button>
        </Box>
      );
    } else if (state === 'after') {
      over = (
        <Box direction='row' justify='center' align='center'>
          <Button onClick={() => this.setState({ state: 'during' })}>
            <Box
              margin='small'
              pad='medium'
              round='medium'
              background={{ color: 'light-4', opacity: 'weak' }}
            >
              <Revert size='large' />
            </Box>
          </Button>
          <Button onClick={() => {}}>
            <Box
              margin='small'
              pad='medium'
              round='medium'
              background={{ color: 'light-4', opacity: 'weak' }}
            >
              <Share size='large' color='brand' />
            </Box>
          </Button>
        </Box>
      );
    }

    return (
      <Stack>
        <Video
          controls={state === 'during' ? 'over' : false}
          autoPlay={state === 'during'}
          onEnded={() => this.setState({ state: 'after' })}
        >
          {CONTENT}
        </Video>
        {over}
      </Stack>
    );
  }
}

export default () => (
  <Doc name='Video' desc={desc}>
    <Box pad='large'>
      <Heading level={2} textAlign='center'>Controls below</Heading>
      <Box align='center' margin={{ vertical: 'medium' }}>
        <Video controls='below'>
          {CONTENT}
        </Video>
      </Box>
      <Heading level={2} textAlign='center'>Controls over</Heading>
      <Box align='center' margin={{ vertical: 'medium' }}>
        <Video controls='over'>
          {CONTENT2}
        </Video>
      </Box>
      <Heading level={2} textAlign='center'>Fit contain</Heading>
      <Box align='center' margin={{ vertical: 'medium' }} basis='medium'>
        <Video controls='over' fit='contain'>
          {CONTENT}
        </Video>
      </Box>
      <Heading level={2} textAlign='center'>Fit cover, autoplay, loop, mute, no controls</Heading>
      <Box margin={{ vertical: 'medium' }} basis='medium'>
        <Video fit='cover' controls={false} autoPlay={true} loop={true} mute={true}>
          {CONTENT}
        </Video>
      </Box>
      <Heading level={2} textAlign='center'>Before and after content with Stack</Heading>
      <Box align='center' margin={{ vertical: 'medium' }}>
        <Stacked />
      </Box>
    </Box>
  </Doc>
);
