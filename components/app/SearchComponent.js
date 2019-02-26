import React from 'react';
import PropTypes from 'prop-types';
import 'isomorphic-fetch';
import { Box, Text, TextInput } from 'grommet';

class SearchComponent extends React.Component {
  state = {
    data: [],
  };

  onSearch = async (e) => {
    fetch(`/api/components/search/${e.target.value}`)
      .then(res => res.json())
      .then(res => this.setState({ data: res }));
  };

  onSelect = ({ suggestion }) => {
    const { onChange } = this.props;
    if (onChange) {
      const selected = suggestion.value.split('_');
      if (selected.length === 2) {
        onChange({ component: selected[0], library: selected[1] });
      }
    }
  };

  createSuggestions = () => {
    const { data } = this.state;
    return data.map(component => (
      {
        label: (
          <Box fill='horizontal' pad='xsmall'>
            <Text><strong>{component.name}</strong></Text>
            <Box direction='row' justify='between'>
              <Text size='small'>
                {component.category}
              </Text>
              <Text size='small'>
                {component.package}
              </Text>
            </Box>
          </Box>
        ),
        value: `${component.name}_${component.package}`,
      }
    ));
  };

  render() {
    const { value } = this.props;
    return (
      <TextInput
        defaultValue={value}
        placeholder='search'
        suggestions={this.createSuggestions()}
        onChange={this.onSearch}
        onSelect={this.onSelect}
      />
    );
  }
}

SearchComponent.defaultProps = {
  onChange: undefined,
  value: undefined,
};

SearchComponent.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default SearchComponent;

