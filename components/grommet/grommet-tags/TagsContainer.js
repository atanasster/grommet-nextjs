import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { Box, Keyboard, Text } from 'grommet';
import { FormClose } from 'grommet-icons';

class TagsContainer extends Component {
  state = {
    selectedOptionIndex: -1,
  };
  static defaultProps = {
    value: [],
    background: 'brand',
    margin: { horizontal: 'xsmall' },
    pad: { horizontal: 'xsmall' },
    gap: 'xsmall',
  };

  tagRefs = [];
  selectOption = (selected) => {
    const { onChange, value } = this.props;
    if (onChange) {
      let option = selected;
      if (Array.isArray(value)) {
        const index = value.indexOf(option);
        if (index !== -1) {
          option = value.filter(item => item !== selected);
        } else {
          option = [...value, option];
        }
      } else {
        option = [option];
      }
      onChange({ target: findDOMNode(this.inputRef), option });
    }
  }

  focusTag(index) {
    if (index >= 0 && index < this.tagRefs.length) {
      findDOMNode(this.tagRefs[index]).focus();
      this.setState({ selectedOptionIndex: index });
    }
  }
  onNextOption = (event) => {
    const { value } = this.props;
    const { selectedOptionIndex } = this.state;
    event.preventDefault();
    const index = Math.min(selectedOptionIndex + 1, value.length - 1);
    this.focusTag(index);
  }

  onPreviousOption = (event) => {
    const { selectedOptionIndex } = this.state;
    event.preventDefault();
    const index = Math.max(selectedOptionIndex - 1, 0);
    this.focusTag(index);
  }

  onSelectOption = (event) => {
    const { value } = this.props;
    const { selectedOptionIndex } = this.state;
    if (selectedOptionIndex >= 0 && selectedOptionIndex < value.length) {
      event.preventDefault(); // prevent submitting forms
      event.stopPropagation();
      this.selectOption(value[selectedOptionIndex]);
    }
  }

  onCloseClick = (e, tag) => {
    e.stopPropagation();
    this.selectOption(tag);
  }

  render() {
    const {
      children,
      id,
      name,
      value,
      color,
      size,
      truncate,
      onClick,
      ...rest
    } = this.props;

    const { selectedOptionIndex } = this.state;
    let values;
    if (Array.isArray(value)) {
      values = value;
    } else {
      values = value ? [value] : [];
    }

    return (
      <Keyboard
        onEnter={this.onSelectOption}
        onLeft={this.onPreviousOption}
        onRight={this.onNextOption}
      >
        <Box
          id={id ? `${id}__tag-container` : undefined}
          direction='row'
          overflow='auto'
        >
          {values.map((option, index) => (
            <Box
              key={`tag_${name || ''}_${index}`}
              tabIndex='-1'
              ref={(ref) => { this.tagRefs[index] = ref; }}
              role='checkbox'
              ariaChecked={true}
              onFocus={() => this.setState({ selectedOptionIndex: index })}
              onClick={onClick ? e => onClick(e, option) : undefined}
              {...rest}
            >
              {children ? children(option, index, value) : (
                <Box direction='row' align='center'>
                  <Text
                    margin='none'
                    color={color}
                    size={size}
                    truncate={truncate}
                    textAlign='center'
                  >
                    {option ? option.toString() : undefined}
                  </Text>
                  <div
                    role='button'
                    onKeyUp={e => this.onCloseClick(e, option)}
                    style={{ height: '24px', backgroundColor: 'transparent', cursor: 'pointer' }}
                    active={
                        selectedOptionIndex === index ||
                        (option &&
                          (Array.isArray(value) ? value.indexOf(option) !== -1 : option === value))
                      }
                    onClick={e => this.onCloseClick(e, option)}
                    hoverIndicator='background'
                    tabIndex='-1'
                  >
                    <FormClose />
                  </div>
                </Box>
                )}
            </Box>
            ))}
        </Box>
      </Keyboard>
    );
  }
}

export default TagsContainer;
