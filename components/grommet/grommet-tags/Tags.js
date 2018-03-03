import React, { Component } from 'react';

import { Box, Text } from 'grommet';

import TagsContainer from './TagsContainer';
import doc from './doc';

class Tags extends Component {
  render() {
    const {
      placeholder, tagProps, onChange, value, ...rest
    } = this.props;
    let noValues;
    if (placeholder && (!value || (Array.isArray(value) && value.length === 0))) {
      noValues = React.isValidElement(placeholder) ? placeholder : (
        <Text color='placeholder' style={{ minHeight: '24px' }}>
          {placeholder}
        </Text>
      );
    }
    return (
      <Box
        direction='row'
        style={{ minWidth: 'auto' }}
        {...rest}
      >
        {noValues}
        <TagsContainer
          value={value}
          onChange={onChange}
          {...tagProps}
        />
      </Box>
    );
  }
}

if (process.env.NODE_ENV !== 'production') {
  doc(Tags);
}

Tags.defaultProps = {
  pad: 'small',
};

export default Tags;
