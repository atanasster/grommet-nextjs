import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { FormDown } from 'grommet-icons';
import { compose } from 'recompose';
import { createTextMaskInputElement } from 'text-mask-core';
import { Box, DropButton, Keyboard, TextInput } from 'grommet';
import { withTheme } from 'grommet/components/hocs';
import StyledMaskedInput, { StyledMaskedInputContainer, StyledWidget } from './StyledMaskedInput';
import { transformMaskedValue } from './utils';

import doc from './doc';

export const placeholderChars = {
  whitespace: '\u2000',
  underscore: '_',
};


export const alphabetic = /[A-Z]/i;
export const digit = /\d/;


class MaskedInput extends Component {
  static defaultProps = {
    dropAlign: { top: 'bottom', right: 'left' },
    icon: <FormDown />,
    plain: false,
    type: 'text',
    guide: true,
    showMask: false,
    focusIndicator: false,
    placeholderChar: placeholderChars.whitespace,
  }

  state = { open: false, inputFocused: false };
  onInput= (event) => {
    const { onInput } = this.props;
    if (this.textMaskInputElement) {
      this.textMaskInputElement.update(event.target.value);
    }
    if (onInput) {
      onInput(event);
    }
  };

  initTextMask() {
    const { props, props: { value } } = this;
    if (props.mask && this.inputControlRef) {
      this.textMaskInputElement = createTextMaskInputElement({
        inputElement: this.inputControlRef,
        ...props,
      });
      this.textMaskInputElement.update(value);
    }
  }

  componentDidMount() {
    this.initTextMask();
  }

  componentDidUpdate() {
    this.initTextMask();
  }
  componentWillReceiveProps(nextProps) {
    const { value } = nextProps;
    if (value !== this.props.value && this.state.open) {
      this.onClose();
    }
  }

  onOpen = (e) => {
    const { onOpen, disabled } = this.props;
    this.setState({ open: !this.state.open });
    if (e) {
      e.preventDefault();
    }
    if (onOpen && !disabled) {
      onOpen(e);
    }
  }

  onClose = (e) => {
    const { onClose, disabled } = this.props;
    this.setState({ open: false });
    if (onClose && !disabled) {
      onClose(e);
    }
  }

  maskedValue(value) {
    const { mask } = this.props;
    if (value) {
      const conformed = transformMaskedValue(value, mask, this.props);
      return conformed;
    }
    return value;
  }

  render() {
    const {
      a11yTitle, a11yDropTitle, children, dropAlign, dropTarget,
      // eslint-disable-next-line no-unused-vars,max-len
      onOpen, onClose, mask, guide, showMask, pipe, placeholderChar, keepCharPositions, onMaskedValue,
      name, type, value, placeholder, plain, focusIndicator, dropContent,
      readOnly, icon, onChange, theme, disabled, ...rest
    } = this.props;
    const { open, inputFocused } = this.state;
    let drop;
    if (dropContent) {
      const dropIcon = <StyledWidget disabled={disabled}>{icon}</StyledWidget>;
      drop = (
        <DropButton
          a11yTitle={a11yDropTitle}
          dropAlign={dropAlign}
          dropTarget={dropTarget}
          open={open}
          tabIndex='-1'
          focusIndicator={false}
          onOpen={this.onOpen}
          onClose={this.onClose}
          dropContent={!disabled && dropContent}
        >
          {dropIcon}
        </DropButton>
      );
    }
    let decorations;
    if (children) {
      decorations = children;
    }
    let formInput;
    if (name !== undefined) {
      formInput = <input type={type} name={name} hidden={true} value={value} />;
    }
    return (
      <Keyboard onDown={this.onOpen} onUp={this.onClose}>
        <StyledMaskedInputContainer >
          <StyledMaskedInput
            plain={plain}
            focusIndicator={focusIndicator}
            focus={inputFocused}
            theme={theme}
          >
            <Box
              align='center'
              direction='row'
            >
              <TextInput
                type={type}
                aria-label={a11yTitle}
                ref={(ref) => {
                    this.inputControlRef = ref && findDOMNode(ref).getElementsByTagName('input')[0];
                  }}
                onFocus={() => { this.setState({ inputFocused: true }); }}
                onBlur={() => { this.setState({ inputFocused: false }); }}
                placeholder={placeholder}
                plain={true}
                focusIndicator={false}
                readOnly={readOnly}
                defaultValue={this.maskedValue(value)}
                onInput={this.onInput}
                disabled={disabled}
                onChange={onChange}
                {...rest}
              />
              {formInput}
              {decorations}
              {drop}
            </Box>
          </StyledMaskedInput>
        </StyledMaskedInputContainer>
      </Keyboard>
    );
  }
}

if (process.env.NODE_ENV !== 'production') {
  doc(MaskedInput);
}

export default compose(
  withTheme,
)(MaskedInput);
