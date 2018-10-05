/* eslint-disable dot-notation */
import PropTypes from 'prop-types';
import 'isomorphic-fetch';
import { Box, Button, Heading, Paragraph, Markdown } from 'grommet';
import Page from './Page';
import DocProperty from './DocProperty';
import Example from './Example';

export default class Doc extends React.Component {
  state = {
    examples: {},
  }
  componentDidMount() {
    const { name } = this.props;
    window.scrollTo(0, 0);
    fetch(`/api/examples/grommet/${name}`)
      .then(res => (res ? res.json() : res))
      .catch(() => this.setState({ examples: {} }))
      .then(res => res && this.setState({ examples: res.examples }));
  }
  render() {
    const {
      children, desc, name, text, nav, footer,
    } = this.props;
    const { examples } = this.state;
    return (
      <Page
        title={this.props.name}
        description={desc && desc.description}
        nav={nav}
        footer={footer}
      >
        <Box pad={{ horizontal: 'large', top: 'large' }}>
          <Box direction='row-responsive'>
            <Box margin={{ vertical: 'large' }} basis='1/2' align='start'>
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
            {examples['_starter'] && (
              <Box flex={true} pad={{ vertical: 'large' }} align='center'>
                <Example code={examples['_starter']} component={name} example='_starter' />
              </Box>
            )}
          </Box>
        </Box>

        {desc ? (
          <Box pad={{ horizontal: 'large', bottom: 'large' }}>
            { desc.usage && (
              <Box pad='large' round='large' margin='small' background='light-2'>
                <Heading margin='none' level={3}><strong>Usage</strong></Heading>
                <Markdown>{`\`\`\`${desc.usage}\`\`\``}</Markdown>
              </Box>
            )}
            {desc.properties && (
              <Box pad='large' round='large' background='light-1'>
                {desc.properties.map(property => (
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
  desc: PropTypes.object,
  name: PropTypes.string.isRequired,
  text: PropTypes.string,
  nav: PropTypes.bool,
  footer: PropTypes.bool,
};

Doc.defaultProps = {
  desc: undefined,
  text: undefined,
  nav: true,
  footer: true,
};
