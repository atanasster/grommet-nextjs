import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';
import RoutedButton from './RoutedButton';

export default class LinksMenu extends Component {
  render() {
    const { items, activeItem } = this.props;
    return (
      <Box direction='row' align='center' tag='nav'>
        {items.map((item, index) => {
          const { label, ...rest } = item;
          return (
            <RoutedButton active={index === activeItem} key={`menu_item_${index}`} {...rest} >
              <Box pad={{ vertical: 'xsmall', horizontal: 'small' }} >
                {label}
              </Box>
            </RoutedButton>
          );
        })}
      </Box>
    );
  }
}

LinksMenu.propTypes = {
  items: PropTypes.array.isRequired,
  activeItem: PropTypes.number.isRequired,
};
