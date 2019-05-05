export const suggestions = `class Demo extends React.Component {
  constructor() {
    super();
    const allSuggestions = ['alan', 'bryan', 'chris', 'david', 'eric', 'tracy'];
    this.state = {
      value: '',
      suggestions: allSuggestions,
      allSuggestions,
    }
  }
  render() {
    const { value, suggestions, allSuggestions } = this.state;
    return (
      <TextInput
        suggestions={suggestions}
        onSelect={
          ({ suggestion }) => this.setState({ value: suggestion })
        }
        onInput={event => this.setState({
          value: event.target.value,
          suggestions: allSuggestions
            .filter(suggestion =>
              suggestion.indexOf(event.target.value) > -1),
        })}
        value={value}
      />
    );
  }
}  

render(<Demo />);    
`;
