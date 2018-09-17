import React from 'react';
import { Box } from 'grommet';
import { Spinning } from 'grommet-controls';
import doc from 'grommet-controls/components/Spinning/doc';
import Doc from '../../components/Doc';

const desc = doc(Spinning).toJSON();

export default class SpinningDoc extends React.Component {
  render() {
    return (
      <Doc
        name='Spinning'
        desc={desc}
        example={
          <Box >
            <Spinning />
          </Box>
        }
        examples={{
          kind: (
            <Box gap='medium'>
              <Spinning kind='circle' />
              <Spinning kind='pulse' />
              <Spinning kind='three-bounce' />
              <Spinning kind='cube-grid' />
              <Spinning kind='wave' />
              <Spinning kind='folding-cube' />
              <Spinning kind='double-bounce' />
              <Spinning kind='wandering-cubes' />
              <Spinning kind='chasing-dots' />
              <Spinning kind='rotating-plane' />
            </Box>
          ),
          color: (
            <Box gap='medium'>
              <Spinning kind='circle' color='brand' />
              <Spinning kind='pulse' color='accent-1' />
              <Spinning kind='three-bounce' color='accent-2' />
              <Spinning kind='cube-grid' color='accent-3' />
              <Spinning kind='wave' color='neutral-1' />
              <Spinning kind='folding-cube' color='red' />
              <Spinning kind='double-bounce' color='blue' />
              <Spinning kind='wandering-cubes' />
              <Spinning kind='chasing-dots' />
              <Spinning kind='rotating-plane' />
            </Box>
          ),
          size: (
            <Box gap='medium'>
              <Spinning kind='circle' color='brand' size='xsmall' />
              <Spinning kind='pulse' color='accent-1' size='small' />
              <Spinning kind='circle' color='brand' size='medium' />
              <Spinning kind='three-bounce' color='accent-2' size='large' />
              <Spinning kind='cube-grid' color='accent-3' size='xlarge' />
            </Box>
          ),
        }}
      />
    );
  }
}
