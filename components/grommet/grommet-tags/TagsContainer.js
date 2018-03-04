import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { Box, Keyboard, Text } from 'grommet';
import FocusedContainer from 'grommet/components/FocusedContainer';

import { StyledIcon } from 'grommet/components/Button/StyledButton';
import { FormClose } from 'grommet-icons';

class TagsContainer extends Component {
  state = {
    selectedTagIndex: -1,
  };
  static defaultProps = {
    value: [],
    background: 'brand',
    gap: 'xsmall',
    direction: 'row',
    pad: { horizontal: 'xsmall' },
    icon: <FormClose />,
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
    const index = Math.min(selectedTagIndex + 1, value.length - 1);
    this.focusTag(index);
  }

  onPreviousTag = (event) => {
    const { selectedTagIndex } = this.state;
    event.preventDefault();
    const index = Math.max(selectedTagIndex - 1, 0);
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
      children,
      id,
      name,
      value,
      color,
      size,
      truncate,
      onClick,
      direction,
      icon,
      theme,
      onChange,
      ...rest
    } = this.props;

    let values;
    if (Array.isArray(value)) {
      values = value;
    } else {
      values = value ? [value] : [];
    }
    let closeIcon;
    if (icon && onChange) {
      closeIcon = (
        <StyledIcon aria-hidden={true} key='tag-icon' theme={theme}>{icon}</StyledIcon>
      );
    }

    return (
      <Keyboard
        onEnter={this.onSelectTag}
        onSpace={this.onSelectTag}
        onLeft={this.onPreviousTag}
        onRight={this.onNextTag}
      >
        <FocusedContainer >
          <Box
            id={id ? `${id}__tag-container` : undefined}
            direction={direction}
          >
            {values.map((tag, index) =>
              (children ? children(tag, index, value) : (
                <Box
                  direction='row'
                  align='center'
                  key={`tag_${name || ''}_${index}`}
                  tabIndex='-1'
                  ref={(ref) => { this.tagRefs[index] = ref; }}
                  ariaChecked={true}
                  onFocus={() => this.setState({ selectedTagIndex: index })}
                  onClick={onClick ? e => onClick(e, tag) : undefined}
                  justify={closeIcon ? 'between' : 'center'}
                  {...rest}
                >
                  <Text
                    key='tag-label'
                    color={color}
                    size={size}
                    truncate={truncate}
                    textAlign='center'
                  >
                    {tag && tag.toString()}
                  </Text>
                  <div
                    role='button'
                    aria-label={tag && tag.toString()}
                    onKeyUp={e => this.onCloseClick(e, tag)}
                    style={{ cursor: 'pointer' }}
                    onClick={e => this.onCloseClick(e, tag)}
                    tabIndex='-1'
                  >
                    {closeIcon}
                  </div>
                </Box>
                )))}
          </Box>
        </FocusedContainer>
      </Keyboard>
    );
  }
}

export default TagsContainer;
