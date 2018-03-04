import React, { Component } from 'react';

import { Box, Text } from 'grommet';
import { compose } from 'recompose';
import { withTheme } from 'grommet/components/hocs';

import TagsContainer from './TagsContainer';
import doc from './doc';

class Tags extends Component {
  render() {
    const {
      placeholder, tagProps, direction, onChange, value, margin,
      icon, onClick, theme, children, ...rest
    } = this.props;
    let noValues;
    if ((!value || (Array.isArray(value) && value.length === 0))) {
      noValues = React.isValidElement(placeholder) ? placeholder : (
        // placeholder. minimum height of icon to keep size
        <Text color='placeholder' margin={margin} style={{ minHeight: '24px' }}>
          {placeholder || 'No selection'}
        </Text>
      );
    }
    return (
      <Box
        direction='row'
        overflow='scroll'
        style={{ minWidth: 'auto' }}
        {...rest}
      >
        {noValues}
        <TagsContainer
          value={value}
          onChange={onChange}
          direction={direction}
          margin={margin}
          theme={theme}
          icon={icon}
          onClick={onClick}
          {...tagProps}
        >
          {children}
        </TagsContainer>
      </Box>
    );
  }
}

if (process.env.NODE_ENV !== 'production') {
  doc(Tags);
}

Tags.defaultProps = {
  pad: { horizontal: 'small' },
  margin: { horizontal: 'xsmall', vertical: 'small' },
};

export default compose(
  withTheme,
)(Tags);
