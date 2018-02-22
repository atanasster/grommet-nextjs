import { Box, TextInput } from 'grommet';
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
      <Doc name='TextInput' desc={desc}>
        <Box pad='large'>
          <Box margin='small'>
            <TextInput />
          </Box>
          <Box margin='small'>
            <TextInput placeholder='placeholder' />
          </Box>
          <Box margin='small'>
            <TextInput
              placeholder='suggestions'
              suggestions={suggestions}
              onSelect={
                ({ suggestion }) => this.setState({ value: suggestion })
              }
              onInput={event => this.setState({
                value: event.target.value,
                suggestions: allSuggestions.filter(
                  suggestion => suggestion.indexOf(event.target.value) > -1
                ),
              })}
              value={value}
            />
          </Box>
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
            <TextInput placeholder='date' type='date' />
          </Box>
          <Box margin='small'>
            <TextInput placeholder='time' type='time' />
          </Box>
          <Box margin='small'>
            <TextInput placeholder='number' type='number' />
          </Box>
          <Box margin='small'>
            <TextInput placeholder='small' size='small' />
          </Box>
          <Box margin='small'>
            <TextInput placeholder='large' size='large' />
          </Box>
          <Box margin='small'>
            <TextInput placeholder='xlarge' size='xlarge' />
          </Box>
          <Box margin='small'>
            <TextInput placeholder='plain' plain={true} />
          </Box>
        </Box>
      </Doc>
    );
  }
}

export default TextInputDoc;
