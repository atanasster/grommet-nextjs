export const fit = `const Demo = () => (
  <Box direction='row' wrap={true}>
    {['contain', 'cover'].map(fit => (
      <Box
        key={fit}
        basis='small'
        margin='xsmall'
        background={{ color: 'accent-2', opacity: 'weak' }}
      >
        <Box basis='small'>
          <Video controls='over' fit={fit}>
            <source key='video' src='//v2.grommet.io/assets/small.mp4' type='video/mp4' />,
            <track
              key='cc'
              label='English'
              kind='subtitles'
              srcLang='en'
              src='//v2.grommet.io/assets/small-en.vtt'
              default={true}
            />
          </Video>
        </Box>
      </Box>
    ))}
  </Box>
);

render(<Demo />);  
`;
