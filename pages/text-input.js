import { Box, Heading, TextInput } from 'grommet';
import doc from 'grommet/components/TextInput/doc';

import Doc from '../components/Doc';

const desc = doc(TextInput).toJSON();

const allSuggestions = ['alan', 'bryan', 'chris', 'david', 'eric', 'tracy'];

class TextInputDoc extends React.Component {
  state = {
    value: '',
    suggestions: allSuggestions,
  }
  render() {
    const { suggestions, value } = this.state;
    return (
      <Doc
        name='TextInput'
        desc={desc}
        examples={{
          placeholder: <TextInput placeholder='abc' />,
          plain: <TextInput value='A' plain={true} />,
          size: (
            <Box>
              <Box margin={{ bottom: 'xsmall' }} align='end'>
                <TextInput size='small' value='A' />
              </Box>
              <Box margin={{ bottom: 'xsmall' }} align='end'>
                <TextInput size='medium' value='B' />
              </Box>
              <Box margin={{ bottom: 'xsmall' }} align='end'>
                <TextInput size='large' value='C' />
              </Box>
              <Box margin={{ bottom: 'xsmall' }} align='end'>
                <TextInput size='xlarge' value='D' />
              </Box>
            </Box>
          ),
          suggestions: (
            <TextInput
              suggestions={suggestions}
              onSelect={
                ({ suggestion }) => this.setState({ value: suggestion })
              }
              onInput={event => this.setState({
                value: event.target.value,
                suggestions: allSuggestions.filter(suggestion =>
                  suggestion.indexOf(event.target.value) > -1),
              })}
              value={value}
            />
          ),
          value: <TextInput value='A' />,
        }}
      >
        <Box basis='large' pad={{ horizontal: 'large', bottom: 'xlarge' }}>
          <Heading level={2} margin={{ top: 'none' }}><strong>Examples</strong></Heading>
          <Box margin='small'>
            <TextInput placeholder='search' type='search' />
          </Box>
          <Box margin='small'>
            <TextInput placeholder='password' type='password' />
          </Box>
          <Box margin='small'>
            <TextInput placeholder='email' type='email' />
          </Box>
          <Box margin='small'>
            <TextInput placeholder='tel' type='tel' />
          </Box>
          <Box margin='small'>
            <TextInput placeholder='url' type='url' />
          </Box>
          <Box margin='small'>
            <TextInput placeholder='number' type='number' />
          </Box>
          <Box margin='small'>
            <TextInput placeholder='date' type='date' />
          </Box>
          <Box margin='small'>
            <TextInput placeholder='time' type='time' />
          </Box>
        </Box>
      </Doc>
    );
  }
}

export default TextInputDoc;
