import React from 'react';
import { Box, Heading, Text } from 'grommet';
import Example from './Example';

export interface PropertyInterface {
  defaultValue: string,
  name: string,
  required: boolean,
  description: string,
  format?: string,
  type?: string,
}

interface DocPropertyProps {
  property: PropertyInterface,
  code?: string,
  basis?: string,
  component?: string,
  library?: string,
  example?: string,
  defaultExample?: string,

}
const DocProperty: React.FC<DocPropertyProps> = ({
    property, code, library, component, example, basis, defaultExample,
  }) => {
  let sample;
  if (code) {
    sample = (
      <Box flex={true} align='end' margin={{ vertical: 'medium' }}>
        <Example
          library={library}
          component={component}
          example={example}
        >
          {code}
        </Example>
      </Box>
    );
  } else {
    sample = defaultExample;
  }
  let defaultValue;
  if (property.defaultValue) {
    defaultValue = <div><strong>{`${property.defaultValue}`}</strong></div>;
  }
  return (
    <Box
      key={property.name}
      direction='row-responsive'
      justify='between'
      align='start'
      border='bottom'
    >
      <Box basis={basis} margin={{ right: 'large' }}>
        <Heading level={3} size='small'>
          <strong>{`${property.name}${property.required ? ' *' : ''}`}</strong>
        </Heading>
        {property.description}
      </Box>
      <Box flex={true} align='start'>
        <Text><pre>{property.format || property.type}{defaultValue}</pre></Text>

      </Box>
      <Box>
        {sample}
      </Box>
    </Box>
  );
};

DocProperty.defaultProps = {
  code: '',
  component: undefined,
  example: undefined,
  library: undefined,
  basis: '1/2',
};


export default DocProperty;
