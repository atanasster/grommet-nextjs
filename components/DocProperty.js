import PropTypes from 'prop-types';
import { Box, Heading, Markdown, Text } from 'grommet';
import Example from './Example';

export default class DocProperty extends React.Component {
  render() {
    const {
      property, code, component, example,
    } = this.props;
    let sample;
    if (code) {
      sample = (
        <Box flex={true} align='end' margin={{ vertical: 'medium' }}>
          <Example code={code} component={component} example={example} />
        </Box>
      );
    }
    let defaultValue;
    if (property.defaultValue) {
      defaultValue = ` (${property.defaultValue})`;
    }
    return (
      <Box
        key={property.name}
        direction='row-responsive'
        justify='between'
        align='start'
        border='bottom'
      >
        <Box basis='1/2' margin={{ right: 'large' }}>
          <Heading level={3} size='small'>
            <strong>{`${property.name}${property.required ? ' *' : ''}`}</strong>
          </Heading>
          <Markdown>{`\`\`\`${property.description}\`\`\``}</Markdown>
        </Box>
        <Box flex={true} align='start'>
          <Text><pre>{property.format}{defaultValue}</pre></Text>

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
};

DocProperty.propTypes = {
  property: PropTypes.object.isRequired,
  code: PropTypes.string,
  component: PropTypes.string,
  example: PropTypes.string,
};

