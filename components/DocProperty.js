import PropTypes from 'prop-types';
import { Box, Heading, Markdown, Text } from 'grommet';

export default class DocProperty extends React.Component {
  static defaultProps = {
    examples: undefined,
  }

  static propTypes = {
    property: PropTypes.object.isRequired,
    examples: PropTypes.object,
  }
  render() {
    const { property, examples } = this.props;
    let example;
    if (examples) {
      example = (
        <Box flex={true} align='end' margin={{ vertical: 'medium' }}>
          {/* <Button
            plain={true}
            icon={codeMode ? <Close /> : <Reactjs color='plain' />}
            onClick={() => this.setState({ codeMode: !codeMode })}
          /> */}
          {examples}
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
          {example}
        </Box>
      </Box>
    );
  }
}
