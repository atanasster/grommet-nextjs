/* eslint-disable dot-notation */
import PropTypes from 'prop-types';
import 'isomorphic-fetch';
import { Box, Button, Heading, Paragraph, Markdown } from 'grommet';
import Page from './Page';
import DocProperty from './DocProperty';
import Example from './Example';

export default class Doc extends React.Component {
  state = {
    documentation: {},
  };
  componentDidMount() {
    const { name } = this.props;
    window.scrollTo(0, 0);
    fetch(`/api/examples/grommet/${name}`)
      .then(res => (res ? res.json() : res))
      .catch(() => this.setState({ documentation: {} }))
      .then(res => res && this.setState({ documentation: res }));
  }
  render() {
    const {
      children, name, text, nav, footer,
    } = this.props;
    const { documentation } = this.state;
    const { examples = {}, doc = {} } = documentation;
    return (
      <Page
        title={this.props.name}
        description={doc && doc.description}
        nav={nav}
        footer={footer}
      >
        <Box pad={{ horizontal: 'large', top: 'large' }}>
          <Box direction='row-responsive'>
            <Box margin={{ vertical: 'large' }} basis='1/2' align='start'>
              <Heading level={1}>
                <strong>{name}</strong>
              </Heading>
              {doc ? (
                <Paragraph size='large'>
                  {doc.description}
                </Paragraph>
              ) : null}
              {text ? (
                <Paragraph size='large'>
                  {text}
                </Paragraph>
              ) : null}
              {(doc && doc.availableAt) ? (
                <Button href={doc.availableAt.url} target='_blank' >
                  {typeof doc.availableAt.badge === 'string' ? <img alt='Example badge' src={doc.availableAt.badge} /> : doc.availableAt.badge}
                </Button>
              ) : null}
            </Box>
            {examples['_starter'] && (
              <Box flex={true} pad={{ vertical: 'large' }} align='center'>
                <Example code={examples['_starter']} component={name} example='_starter' />
              </Box>
            )}
          </Box>
        </Box>

        {doc ? (
          <Box pad={{ horizontal: 'large', bottom: 'large' }}>
            { doc.usage && (
              <Box pad='large' round='large' margin='small' background='light-2'>
                <Heading margin='none' level={3}><strong>Usage</strong></Heading>
                <Markdown>{`\`\`\`${doc.usage}\`\`\``}</Markdown>
              </Box>
            )}
            {doc.properties && (
              <Box pad='large' round='large' background='light-1'>
                {doc.properties.map(property => (
                  <DocProperty
                    key={property.name}
                    property={property}
                    code={examples[property.name]}
                    component={name}
                    example={property.name}
                  />
                ))}
              </Box>
            )}
          </Box>
        ) : null}
        {children}
      </Page>
    );
  }
}

Doc.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string,
  nav: PropTypes.bool,
  footer: PropTypes.bool,
};

Doc.defaultProps = {
  text: undefined,
  nav: true,
  footer: true,
};
