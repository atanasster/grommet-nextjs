import PropTypes from 'prop-types';
import { Box, Button, Heading, Paragraph, Text, Markdown } from 'grommet';
import Page from './Page';
import DocProperty from './DocProperty';

export default class Doc extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const {
      children, desc, name, example, examples, text, nav, footer,
    } = this.props;
    return (
      <Page
        title={this.props.name}
        description={desc && desc.description}
        nav={nav}
        footer={footer}
      >
        <Box pad={{ horizontal: 'large', top: 'large' }}>
          <Box direction='row-responsive'>
            <Box margin={{ vertical: 'large' }} basis='2/3' align='start'>
              <Heading level={1}>
                <strong>{name}</strong>
              </Heading>
              {desc ? (
                <Paragraph size='large'>
                  {desc.description}
                </Paragraph>
              ) : null}
              {text ? (
                <Paragraph size='large'>
                  {text}
                </Paragraph>
              ) : null}
              {(desc && desc.availableAt) ? (
                <Button href={desc.availableAt.url} target='_blank' >
                  {typeof desc.availableAt.badge === 'string' ? <img alt='Example badge' src={desc.availableAt.badge} /> : desc.availableAt.badge}
                </Button>
              ) : null}
            </Box>
            <Box flex={true} pad={{ vertical: 'large' }}>
              {example}
            </Box>
          </Box>
        </Box>

        {desc ? (
          <Box pad={{ horizontal: 'large', bottom: 'large' }}>
            { desc.usage && (
              <Box pad='large' round='large' margin='small' background='light-2'>
                <Heading margin='none' level={3}><strong>Usage</strong></Heading>
                <Markdown>{`\`\`${desc.usage}\`\``}</Markdown>
              </Box>
            )}
            <Box pad='large' round='large' background='light-1'>
              {desc.properties ? desc.properties.map(property => (
                <DocProperty
                  key={property.name}
                  property={property}
                  examples={examples[property.name]}
                />
              )) :
              <Text color='light-5'>No properties</Text>}
            </Box>
          </Box>
        ) : null}
        {children}
      </Page>
    );
  }
}

Doc.propTypes = {
  desc: PropTypes.object,
  example: PropTypes.node,
  examples: PropTypes.object,
  name: PropTypes.string.isRequired,
  text: PropTypes.string,
  nav: PropTypes.bool,
  footer: PropTypes.bool,
};

Doc.defaultProps = {
  desc: undefined,
  example: null,
  examples: {},
  text: undefined,
  nav: true,
  footer: true,
};
