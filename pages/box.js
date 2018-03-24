import React from 'react';
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
        <Box direction='row' justify='end' wrap={true}>
          {['start', 'center', 'end'].map(align => (
            <Box
              key={align}
              direction='row'
              align={align}
              margin='xsmall'
              background={{ color: 'accent-2', opacity: 'weak' }}
            >
              <Box
                pad='medium'
                background={{ color: 'accent-2', opacity: 'weak' }}
              />
              <Box
                pad='small'
                background={{ color: 'accent-2', opacity: 'strong' }}
              />
            </Box>
          ))}
        </Box>
      ),
      // skip animation example so property values don't stretch long
      // animation: (
      //   <Box align='end'>
      //     <Box
      //       animation='pulse'
      //       pad='medium'
      //       background={{ color: 'accent-2', opacity: 'strong' }}
      //     />
      //   </Box>
      // ),
      background: (
        <Box direction='row' justify='end' wrap={true}>
          {[undefined, 'strong', 'medium', 'weak'].map(opacity => (
            <Box
              key={opacity || 'opacity'}
              background={{ color: 'accent-2', opacity }}
              pad='medium'
              margin='xsmall'
            />
          ))}
        </Box>
      ),
      border: (
        <Box direction='row' justify='end' wrap={true} align='start'>
          {['xsmall', 'small', 'medium', 'large'].map(size => (
            <Box
              key={size}
              border={{ side: 'all', size, color: 'accent-2' }}
              pad='small'
              margin='xsmall'
            />
          ))}
        </Box>
      ),
      elevation: (
        <Box direction='row' justify='end' wrap={true} align='start'>
          {['none', 'xsmall', 'small', 'medium', 'large', 'xlarge'].map(elevation => (
            <Box
              key={elevation}
              elevation={elevation}
              pad='medium'
              margin='xsmall'
            />
          ))}
        </Box>
      ),
      gap: (
        <Box direction='row' justify='end' wrap={true} align='start'>
          {['xsmall', 'small', 'medium', 'large'].map(gap => (
            <Box
              key={gap}
              gap={gap}
              direction='row'
              background={{ color: 'accent-2', opacity: 'weak' }}
              margin='xsmall'
            >
              <Box
                background={{ color: 'accent-2', opacity: 'strong' }}
                pad='small'
              />
              <Box
                background={{ color: 'accent-2', opacity: 'strong' }}
                pad='small'
              />
            </Box>
          ))}
        </Box>
      ),
      justify: (
        <Box direction='row' justify='end' wrap={true} align='start'>
          {['start', 'center', 'between', 'end'].map(justify => (
            <Box
              key={justify}
              basis='xsmall'
              direction='row'
              justify={justify}
              background={{ color: 'accent-2', opacity: 'weak' }}
              margin='xsmall'
            >
              <Box
                pad='small'
                background={{ color: 'accent-2', opacity: 'medium' }}
              />
              <Box
                pad='small'
                background={{ color: 'accent-2', opacity: 'strong' }}
              />
            </Box>
          ))}
        </Box>
      ),
      margin: (
        <Box direction='row' justify='end' wrap={true} align='start'>
          {['none', 'xsmall', 'small', 'medium'].map(margin => (
            <Box
              key={margin}
              margin={margin}
              pad='small'
              background={{ color: 'accent-2', opacity: 'strong' }}
            />
          ))}
        </Box>
      ),
      pad: (
        <Box direction='row' justify='end' wrap={true} align='start'>
          {['none', 'xsmall', 'small', 'medium'].map(pad => (
            <Box
              key={pad}
              pad={pad}
              background={{ color: 'accent-2', opacity: 'weak' }}
              margin='xsmall'
            >
              <Box
                pad='small'
                background={{ color: 'accent-2', opacity: 'strong' }}
              />
            </Box>
          ))}
        </Box>
      ),
      round: (
        <Box direction='row' justify='end' wrap={true} align='start'>
          {['xsmall', 'small', 'medium'].map(round => (
            <Box
              key={round}
              round={round}
              pad='medium'
              background={{ color: 'accent-2', opacity: 'strong' }}
              margin='xsmall'
            />
          ))}
        </Box>
      ),
      wrap: (
        <Box fill={true} direction='row' justify='end'>
          <Box
            basis='small'
            align='end'
            direction='row'
            wrap={true}
            background={{ color: 'accent-2', opacity: 'weak' }}
          >
            {[0, 1, 2, 3, 4, 5, 6].map(index => (
              <Box
                key={index * 10}
                pad='small'
                margin='xsmall'
                background={{ color: 'accent-2', opacity: 'strong' }}
              />
            ))}
          </Box>
        </Box>
      ),
    }}
  />
);
