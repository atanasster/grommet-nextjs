import PropTypes from 'prop-types';
import { Box, Heading, Text } from 'grommet';
import Example from './Example';

export default class DocProperty extends React.Component {
  render() {
    const {
      property, code, component, example, basis, defaultExample,
    } = this.props;
    let sample;
    if (code) {
      sample = (
        <Box flex={true} align='end' margin={{ vertical: 'medium' }}>
          <Example code={code} component={component} example={example} />
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
  }
}

DocProperty.defaultProps = {
  code: '',
  component: undefined,
  example: undefined,
  basis: '1/2',
};

DocProperty.propTypes = {
  property: PropTypes.object.isRequired,
  code: PropTypes.string,
  basis: PropTypes.string,
  component: PropTypes.string,
  example: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

