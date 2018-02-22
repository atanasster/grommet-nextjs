import { Box } from 'grommet';
import doc from 'grommet/components/Box/doc';
import Doc from '../components/Doc';

const desc = doc(Box).toJSON();

export default () => (
  <Doc
    name='Box'
    desc={desc}
    example={(
      <Box
        flex={true}
        border={{ color: 'brand', size: 'large' }}
        pad='medium'
      />
    )}
    examples={{
      align: (
        <Box align='end'>
          {['start', 'center', 'end'].map(align => (
            <Box
              key={align}
              direction='row'
              align={align}
              border={{ color: 'brand' }}
              margin='xsmall'
            >
              <Box pad='medium' background='light-2' />
              <Box pad='small' background='light-3' />
            </Box>
          ))}
        </Box>
      ),
      animation: (
        <Box align='end'>
          <Box animation='pulse' pad='medium' background='light-3' />
        </Box>
      ),
      background: (
        <Box background='brand' pad='medium' />
      ),
      border: (
        <Box align='end'>
          {['xsmall', 'small', 'medium', 'large'].map(size => (
            <Box
              key={size}
              border={{ side: 'all', size, color: 'brand' }}
              pad='medium'
              margin='xsmall'
            />
          ))}
        </Box>
      ),
      elevation: (
        <Box align='end'>
          {['none', 'xsmall', 'small', 'medium', 'large', 'xlarge'].map(elevation => (
            <Box
              key={elevation}
              elevation={elevation}
              border={true}
              pad='medium'
              margin='xsmall'
            />
          ))}
        </Box>
      ),
      gap: (
        <Box align='end'>
          {['xsmall', 'small', 'medium', 'large'].map(gap => (
            <Box
              key={gap}
              gap={gap}
              direction='row'
              border={{ color: 'brand' }}
              margin='xsmall'
            >
              <Box background='light-3' pad='small' />
              <Box background='light-3' pad='small' />
            </Box>
          ))}
        </Box>
      ),
      justify: (
        <Box fill={true}>
          {['start', 'center', 'between', 'end'].map(justify => (
            <Box
              key={justify}
              direction='row'
              justify={justify}
              border={{ color: 'brand' }}
              margin='xsmall'
            >
              <Box pad='small' background='light-2' />
              <Box pad='small' background='light-3' />
            </Box>
          ))}
        </Box>
      ),
      margin: (
        <Box align='start'>
          {['none', 'xsmall', 'small', 'medium', 'large'].map(margin => (
            <Box key={margin} border='bottom'>
              <Box
                margin={margin}
                pad='small'
                background='light-3'
                border={{ color: 'brand' }}
              />
            </Box>
          ))}
        </Box>
      ),
      pad: (
        <Box align='start'>
          {['none', 'xsmall', 'small', 'medium', 'large'].map(pad => (
            <Box
              key={pad}
              pad={pad}
              background='light-2'
              border={{ color: 'brand' }}
              margin='xsmall'
            >
              <Box pad='small' background='light-3' />
            </Box>
          ))}
        </Box>
      ),
      round: (
        <Box align='start'>
          {['xsmall', 'small', 'medium', 'large'].map(round => (
            <Box
              key={round}
              round={round}
              pad='medium'
              border={{ color: 'brand' }}
              margin='xsmall'
            />
          ))}
        </Box>
      ),
      wrap: (
        <Box fill={true} direction='row' justify='end'>
          <Box
            basis='xsmall'
            align='end'
            direction='row'
            wrap={true}
            border={{ color: 'brand' }}
          >
            <Box pad='small' margin='xsmall' background='light-2' />
            <Box pad='small' margin='xsmall' background='light-2' />
            <Box pad='small' margin='xsmall' background='light-2' />
            <Box pad='small' margin='xsmall' background='light-2' />
            <Box pad='small' margin='xsmall' background='light-2' />
          </Box>
        </Box>
      ),
    }}
  />
);
