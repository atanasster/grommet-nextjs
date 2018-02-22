import PropTypes from 'prop-types';
import { Box, Button, Heading, Markdown, Paragraph, RoutedButton, Text } from 'grommet';
import { hpe } from 'grommet/themes';
import { View, LinkPrevious } from 'grommet-icons';

const THEMES = {
  grommet: undefined,
  hpe,
};

export default class Props extends React.Component {
  static contextTypes = {
    currentTheme: PropTypes.string,
    onThemeChange: PropTypes.func,
    router: PropTypes.object,
  };

  static defaultProps = {
    desc: {},
  }

  render() {
    const {
      desc: { description, properties }, name, onExamples, responsiveState, text,
    } = this.props;
    const { currentTheme, onThemeChange } = this.context;

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

    const themeOptions = Object.keys(THEMES).map(t => <option key={t}>{t}</option>);

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
        <Box margin='medium'>
          <Heading level={3}>Theme</Heading>
          <select value={currentTheme} onChange={event => onThemeChange(event.target.value)}>
            {themeOptions}
          </select>
        </Box>
      </Box>
    );
  }
}
