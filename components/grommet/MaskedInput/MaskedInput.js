import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { FormDown } from 'grommet-icons';
import { compose } from 'recompose';
import { createTextMaskInputElement, conformToMask } from 'text-mask-core';
import { Box, DropButton, Keyboard, TextInput } from 'grommet';
import { withTheme } from 'grommet/components/hocs';
import StyledMaskedInput, { StyledMaskedInputContainer, StyledWidget } from './StyledMaskedInput';
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
    const { onOpen } = this.props;
    this.setState({ open: !this.state.open });
    if (e) {
      e.preventDefault();
    }
    if (onOpen) {
      onOpen(e);
    }
  }

  onClose = (e) => {
    const { onClose } = this.props;
    this.setState({ open: false });
    if (onClose) {
      onClose(e);
    }
  }

  maskedValue(value) {
    const {
      mask, guide, placeholderChar,
    } = this.props;
    if (typeof mask === 'object' && value) {
      const conformed = conformToMask(value, mask, {
        guide, placeholderChar,
      });

      if (conformed.meta.someCharsRejected === false) {
        return conformed.conformedValue;
      }
    }
    return value;
  }

  render() {
    const {
      a11yTitle, a11yDropTitle, children, dropAlign, dropTarget, type,
      // eslint-disable-next-line no-unused-vars
      onOpen, onClose, value, placeholder, plain, focusIndicator, dropContent,
      readOnly, icon, name, id, onChange, theme,
    } = this.props;
    const { open, inputFocused } = this.state;
    let drop;
    if (dropContent) {
      const dropIcon = <StyledWidget >{icon}</StyledWidget>;
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
          dropContent={dropContent}
        >
          {dropIcon}
        </DropButton>
      );
    }
    let decorations;
    if (children) {
      decorations = children;
    }
    return (
      <Keyboard onDown={this.onOpen} onUp={this.onOpen}>
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
                aria-label={a11yTitle}
                ref={(ref) => {
                    this.inputRef = ref;
                    this.inputControlRef = ref && findDOMNode(ref).getElementsByTagName('input')[0];
                  }}
                type={type}
                onFocus={() => { this.setState({ inputFocused: true }); }}
                onBlur={() => { this.setState({ inputFocused: false }); }}
                placeholder={placeholder}
                plain={true}
                focusIndicator={false}
                readOnly={readOnly}
                defaultValue={this.maskedValue(value)}
                onInput={this.onInput}
                name={name}
                id={id}
                onChange={onChange}
              />
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
