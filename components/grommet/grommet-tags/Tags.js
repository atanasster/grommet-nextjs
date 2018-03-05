import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { Box, Text, Keyboard } from 'grommet';
import { FormClose } from 'grommet-icons';
import { GrommetTag } from '../grommet-tag';


import doc from './doc';

class Tags extends Component {
  state = {
    selectedTagIndex: -1,
  };

  tagRefs = [];
  selectTag = (selected) => {
    const { onChange, value } = this.props;
    if (onChange) {
      let tags = selected;
      if (Array.isArray(value)) {
        const index = value.indexOf(tags);
        if (index !== -1) {
          tags = value.filter(item => item !== selected);
        } else {
          tags = [...value, tags];
        }
      } else {
        tags = [tags];
      }
      onChange({ target: findDOMNode(this.inputRef), option: tags });
    }
  }

  focusTag(index) {
    if (index >= 0 && index < this.tagRefs.length) {
      findDOMNode(this.tagRefs[index]).focus();
      this.setState({ selectedTagIndex: index });
    }
  }
  onNextTag = (event) => {
    const { value } = this.props;
    const { selectedTagIndex } = this.state;
    event.preventDefault();
    let index = selectedTagIndex + 1;
    if (index >= value.length) {
      index = 0;
    }
    this.focusTag(index);
  }
  onPreviousTag = (event) => {
    const { selectedTagIndex } = this.state;
    const { value } = this.props;
    event.preventDefault();
    let index = selectedTagIndex - 1;
    if (index < 0) {
      index = value.length - 1;
    }
    this.focusTag(index);
  }
  onSelectTag = (event) => {
    const { value } = this.props;
    const { selectedTagIndex } = this.state;
    if (selectedTagIndex >= 0 && selectedTagIndex < value.length) {
      event.preventDefault(); // prevent submitting forms
      event.stopPropagation();
      this.selectTag(value[selectedTagIndex]);
    }
  }

  onCloseClick = (e, tag) => {
    e.stopPropagation();
    this.selectTag(tag);
  }

  render() {
    const {
      placeholder,
      children,
      id,
      name,
      value,
      margin,
      focusable,
      onClick,
      direction,
      icon,
      tagProps,
      ...rest
    } = this.props;
    let noValues;
    if ((!value || (Array.isArray(value) && value.length === 0))) {
      noValues = React.isValidElement(placeholder) ? placeholder : (
        // placeholder. minimum height of icon to keep size
        <Text color='placeholder' style={{ minHeight: '24px' }}>
          {placeholder || 'No selection'}
        </Text>
      );
    }

    let values;
    if (Array.isArray(value)) {
      values = value;
    } else {
      values = value ? [value] : [];
    }
    return (
      <Keyboard
        onEnter={this.onSelectTag}
        onSpace={this.onSelectTag}
        onLeft={this.onPreviousTag}
        onRight={this.onNextTag}
      >
        <Box
          tabIndex={focusable ? '0' : undefined}
          id={id ? `${id}__tag-container` : undefined}
          direction={direction}
          overflow='scroll'
          style={{ minWidth: 'auto' }}
          {...rest}
        >
          {noValues || values.map((tag, index) =>
            (children ? children(tag, index, value) : (
              <GrommetTag
                key={`tag_${name || ''}_${index}`}
                ariaChecked={true}
                a11yTitle={`Remove ${tag.toString()}`}
                label={tag.toString()}
                ref={(ref) => { this.tagRefs[index] = ref; }}
                onClick={onClick ? e => onClick(e, tag) : undefined}
                onChange={e => this.onCloseClick(e, tag)}
                icon={icon}
                {...tagProps}
              />
              )))}
        </Box>
      </Keyboard>
    );
  }
}

if (process.env.NODE_ENV !== 'production') {
  doc(Tags);
}

Tags.defaultProps = {
  pad: 'small',
  focusable: true,
  margin: { horizontal: 'xsmall', vertical: 'small' },
  value: [],
  gap: 'xsmall',
  direction: 'row',
  icon: <FormClose />,
};

export default Tags;
