import { Box, Video } from 'grommet';
import doc from 'grommet/components/Video/doc';

import Doc from '../components/Doc';

const desc = doc(Video).toJSON();

const CONTENT = [
  <source key='video' src='//v2.grommet.io/assets/small.mp4' type='video/mp4' />,
  <track
    key='cc'
    label='English'
    kind='subtitles'
    srcLang='en'
    src='//v2.grommet.io/assets/small-en.vtt'
    default={true}
  />,
];

const CONTENT2 = [...CONTENT,
  <track
    key='cc2'
    label='French'
    kind='subtitles'
    srcLang='fr'
    src='//v2.grommet.io/assets/small-fr.vtt'
  />,
];

export default () => (
  <Doc
    name='Video'
    desc={desc}
    example={(
      <Box pad='large'>
        <Video controls='over' fit='cover'>
          {CONTENT2}
        </Video>
      </Box>
    )}
    examples={{
      controls: (
        <Box>
          {[false, 'over', 'below'].map(controls => (
            <Box key={controls} basis='small' margin={{ bottom: 'xsmall' }}>
              <Video controls={controls} fit='cover'>
                {CONTENT2}
              </Video>
            </Box>
          ))}
        </Box>
      ),
      fit: (
        <Box>
          {['contain', 'cover'].map(fit => (
            <Box key={fit} basis='small' border='all' margin={{ bottom: 'xsmall' }}>
              <Video controls='over' fit={fit}>
                {CONTENT}
              </Video>
            </Box>
          ))}
        </Box>
      ),
    }}
  />
);
