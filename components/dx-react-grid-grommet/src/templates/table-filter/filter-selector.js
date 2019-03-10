import React from 'react';
import PropTypes from 'prop-types';
import { Text, Menu } from 'grommet';

class FilterSelectorBase extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      opened: false,
    };

    this.setButtonRef = (buttonRef) => {
      this.buttonRef = buttonRef;
    };
    this.handleButtonClick = () => {
      this.setState(prevState => ({ opened: !prevState.opened }));
    };
    this.handleMenuClose = () => {
      this.setState({ opened: false });
    };
    this.handleMenuItemClick = (nextValue) => {
      const { onChange } = this.props;
      this.setState({ opened: false });
      onChange(nextValue);
    };
  }

  render() {
    const {
      value, availableValues, disabled, getMessage,
      iconComponent: Icon,
    } = this.props;
    return availableValues.length ? (
      <Menu
        dropTarget={this.buttonRef}
        disabled={disabled || availableValues.length === 1}
        icon={<Icon type={value} />}
        items={availableValues.map(valueItem => ({
          label: <Text truncate={true} margin={{ horizontal: 'small' }}>{getMessage(valueItem)}</Text>,
          icon: <Icon type={valueItem} />,
          onClick: () => this.handleMenuItemClick(valueItem),
          }))
        }
      />
    ) : null;
  }
}

FilterSelectorBase.propTypes = {
  value: PropTypes.string,
  availableValues: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  iconComponent: PropTypes.func.isRequired,
  getMessage: PropTypes.func.isRequired,
};

FilterSelectorBase.defaultProps = {
  value: undefined,
  availableValues: [],
  onChange: () => {},
  disabled: false,
};

export const FilterSelector = FilterSelectorBase;
