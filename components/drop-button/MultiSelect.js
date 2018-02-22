import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';

import { Box, Button, Keyboard, Text, TextInput } from 'grommet';
import { FormClose } from 'grommet-icons';

function debounce(cb, timer) {
  let timeout;
  return (...args) => {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => cb.apply(context, args), timer);
  };
}

export default class MultiSelect extends React.Component {
  static defaultProps = {
    basis: undefined,
    children: undefined,
    search: '',
    onClose: undefined,
    onSearch: undefined,
  }
  static propTypes = {
    basis: PropTypes.string,
    category: PropTypes.string.isRequired,
    children: PropTypes.func,
    items: PropTypes.array.isRequired,
    onClose: PropTypes.func,
    onSearch: PropTypes.func,
    onSelect: PropTypes.func.isRequired,
    search: PropTypes.string,
  }
  itemsRef = {}
  constructor(props, context) {
    super(props, context);
    this.state = {
      search: props.search,
      activeItemIndex: -1,
    };
  }

  componentDidMount() {
    const { onSearch } = this.props;
    if (onSearch) {
      // timeout need to send the operation through event loop and allow time to the portal
      // to be available
      setTimeout(() => {
        findDOMNode(this.searchRef).querySelector('input').focus();
      }, 0);
    }
  }

  componentDidUpdate() {
    const { activeItemIndex } = this.state;
    const buttonNode = findDOMNode(this.itemsRef[activeItemIndex]);
    if (activeItemIndex >= 0 && buttonNode) {
      buttonNode.scrollIntoView();
    }
  }

  onInput = (event) => {
    this.setState(
      { search: event.target.value, activeItemIndex: -1 }, () => this.onSearch(this.state.search)
    );
  }

  onSearch = debounce(search => this.props.onSearch(search), 150)

  selectItem = item => this.props.onSelect(item)

  onNextItem = (event) => {
    const { items } = this.props;
    const { activeItemIndex } = this.state;
    if (items.length) {
      event.preventDefault();
      const index = Math.min(activeItemIndex + 1, items.length - 1);
      this.setState({ activeItemIndex: index });
    }
  }

  onPreviousItem = (event) => {
    const { items } = this.props;
    const { activeItemIndex } = this.state;
    if (items.length) {
      event.preventDefault();
      const index = Math.max(activeItemIndex - 1, 0);
      this.setState({ activeItemIndex: index });
    }
  }

  onItemSelect = (event) => {
    const { items } = this.props;
    const { activeItemIndex } = this.state;
    if (activeItemIndex >= 0) {
      event.preventDefault(); // prevent submitting forms
      this.selectItem(items[activeItemIndex]);
    }
  }

  render() {
    const { basis, category, children, onClose, items, onSearch, onKeyDown } = this.props;
    const { activeItemIndex, search } = this.state;
    return (
      <Keyboard
        onEnter={this.onItemSelect}
        onUp={this.onPreviousItem}
        onDown={this.onNextItem}
        onKeyDown={onKeyDown}
      >
        <Box>
          <Box
            align='center'
            pad='xsmall'
            direction='row'
            tag='header'
            justify='between'
            border='bottom'
          >
            <Text size='small' margin={{ horizontal: 'xsmall' }}>
              <strong>{`Select ${category}`}</strong>
            </Text>
            {onClose ? (
              <Button a11yTitle={`Close ${category} drop`} plain={true} onClick={onClose}>
                <Box align='center'>
                  <FormClose />
                </Box>
              </Button>
            ) : undefined}
          </Box>
          {onSearch ? (
            <Box pad='small' border='bottom'>
              <TextInput
                ref={(ref) => { this.searchRef = ref; }}
                type='search'
                value={search}
                placeholder={`Filter ${category}`}
                onInput={this.onInput}
              />
            </Box>
          ) : undefined}
          <Box basis={basis} overflow='auto'>
            {items.length ? (
              <Box flex={false}>
                {items.map((item, index) => (
                  <Button
                    ref={(ref) => { this.itemsRef[index] = ref; }}
                    active={activeItemIndex === index}
                    key={`item_${category}_${index}`}
                    onClick={() => this.selectItem(item)}
                    hoverIndicator='background'
                  >
                    {children ? children(item, index) : (
                      <Box align='start' pad='small'>
                        <Text margin='none'>{item}</Text>
                      </Box>
                    )}
                  </Button>
                ))}
              </Box>
            ) : (
              <Box flex={true} align='center' justify='center' pad='small'>
                <Text textAlign='center'>
                  No {category} available
                </Text>
              </Box>
            )}
          </Box>
        </Box>
      </Keyboard>
    );
  }
}
