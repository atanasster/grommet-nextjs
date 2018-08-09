import React from 'react';
import { Box, Text } from 'grommet';
import { Down } from 'grommet-icons';
import { Value } from 'grommet-controls';
import doc from 'grommet-controls/components/Value/doc';
import Doc from '../../components/Doc';

const desc = doc(Value).toJSON();

export default class ValueDoc extends React.Component {
  render() {
    return (
      <Doc
        name='Value'
        desc={desc}
        example={
          <Box gap='large'>
            <Box direction='row'>
              <Value value='30%' label='last quarter sales' />
            </Box>
          </Box>
        }
        examples={{
          label: (
            <Value
              value='30%'
              label='a descriptive label'
            />
          ),
          value: (
            <Value
              value={(
                <Box direction='row' align='center' gap='xsmall'>
                  <Text size='large' weight='bold' color='status-error'>30%</Text>
                  <Down color='status-error' />
                </Box>
               )}
              label='custom value'
            />
          ),
          color: (
            <Value
              label='status-ok'
              value='30%'
              color='status-ok'
            />
          ),
          weight: (
            <Box direction='row'>
              <Box basis='small' gap='small'>
                <Value
                  weight='normal'
                  value='30%'
                  label='normal'
                />
                <Value
                  weight='bold'
                  value='30%'
                  label='bold'
                />
                <Value
                  weight={400}
                  value='30%'
                  label='400'
                />
              </Box>
            </Box>
          ),
          size: (
            <Box direction='row'>
              <Box basis='small' gap='small'>
                <Value
                  size='xsmall'
                  value='30%'
                  label='xsmall'
                />
                <Value
                  size='small'
                  value='30%'
                  label='small'
                />
                <Value
                  size='medium'
                  value='30%'
                  label='medium'
                />
                <Value
                  size='large'
                  value='30%'
                  label='large'
                />
                <Value
                  size='xlarge'
                  value='30%'
                  label='xlarge'
                />
                <Value
                  size='xxlarge'
                  value='30%'
                  label='xxlarge'
                />
              </Box>
            </Box>
          ),
        }}
      />
    );
  }
}
