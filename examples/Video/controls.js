export const controls = `const Demo = () => (
  <Box direction='row' wrap={true}>
    {[false, 'over', 'below'].map(controls => (
      <Box key={controls} basis='small' margin='xsmall'>
        <Video controls={controls} fit='cover'>
          <source key='video' src='//v2.grommet.io/assets/small.mp4' type='video/mp4' />,
          <track
            key='cc'
            label='English'
            kind='subtitles'
            srcLang='en'
            src='//v2.grommet.io/assets/small-en.vtt'
            default={true}
          />
          <track
            key='cc2'
            label='French'
            kind='subtitles'
            srcLang='fr'
            src='//v2.grommet.io/assets/small-fr.vtt'
          />
        </Video>
      </Box>
    ))}
  </Box>
);

render(<Demo />);  
`;
