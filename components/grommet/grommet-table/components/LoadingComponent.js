import React from 'react';
import { Box, Text, Layer } from 'grommet';

export default ({ loading, loadingText }) => (
  <div>
    {loading && (
      <Layer
        position='center'
        model={true}

      >
        <Box margin={{ horizontal: 'xlarge', vertical: 'small'}} >
          <Text>{loadingText}</Text>
        </Box>
      </Layer>
    )}
  </div>
);
