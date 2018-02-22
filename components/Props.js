import PropTypes from 'prop-types';
import { Box, Button, Heading, Markdown, Paragraph, RoutedButton, Text } from 'grommet';
import { View, LinkPrevious } from 'grommet-icons';


export default class Props extends React.Component {
  static defaultProps = {
    desc: {},
  }

  render() {
    const {
      desc: { description, properties }, name, onExamples, responsiveState, text,
    } = this.props;

    const iconSize = (responsiveState === 'narrow' ? undefined : 'large');

    const props = (properties || []).map(property => (
      <Box key={property.name}>
        <Heading level={3} size='small'>
          <strong>{property.name}</strong>
        </Heading>
        <Paragraph>{property.description}</Paragraph>
        <Text><pre>{property.format}</pre></Text>
      </Box>
    ));

    let examplesControl;
    if (onExamples) {
      examplesControl = (
        <Button icon={<View size={iconSize} />} onClick={onExamples} />
      );
    }

    return (
      <Box
        basis='medium'
        background='light-1'
        animation={[
          { type: 'fadeIn', delay: 100 },
          { type: 'slideRight', delay: 200 },
        ]}
      >
        <Box
          direction='row'
          justify='between'
          align='center'
          pad={{ horizontal: 'small' }}
        >
          <RoutedButton path='/' icon={<LinkPrevious size={iconSize} />} />
          <Box margin={{ horizontal: 'small' }}>
            <Heading margin='none' size={responsiveState === 'narrow' ? 'small' : undefined}>
              {name}
            </Heading>
          </Box>
          {examplesControl}
        </Box>
        <Box margin='medium' flex='grow'>
          <Markdown >
            {text || ''}
          </Markdown>
          <Paragraph>
            {description}
          </Paragraph>
          {props}
        </Box>
      </Box>
    );
  }
}
