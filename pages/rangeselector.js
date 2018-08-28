import React, { Component } from 'react';
import { Box, RangeSelector, Stack, Text } from 'grommet';
import { doc } from 'grommet/components/RangeSelector/doc';

import Doc from '../components/Doc';

const desc = doc(RangeSelector).toJSON();

class RangeSelectorDoc extends Component {
   state = {
     values: [3, 7],
   }
   render() {
     const { values } = this.state;
     return (
       <Doc
         name='RangeSelector'
         desc={desc}
         example={(
           <Stack>
             <Box direction='row' justify='between'>
               {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(value => (
                 <Box key={value} pad='small'>
                   <Text style={{ fontFamily: 'monospace' }}>{value}</Text>
                 </Box>
               ))}
             </Box>
             <RangeSelector
               direction='horizontal'
               invert={false}
               min={0}
               max={9}
               size='full'
               round='small'
               values={values}
               onChange={nextValues => this.setState({ values: nextValues })}
             />
           </Stack>
         )}
       />
     );
   }
}

export default RangeSelectorDoc;
