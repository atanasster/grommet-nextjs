import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { FormDown } from 'grommet-icons';
import { compose } from 'recompose';
import { createTextMaskInputElement } from 'text-mask-core';
import { Box, DropButton, Keyboard } from 'grommet';
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
    dropIcon: <FormDown />,
    plain: false,
    type: 'text',
    guide: true,
    showMask: false,
    focusIndicator: false,
    widgets: [],
    placeholderChar: placeholderChars.whitespace,
  }

  state = { open: false };
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
      a11yTitle, a11yDropTitle, dropAlign, dropTarget, widgets,
      // eslint-disable-next-line no-unused-vars,max-len
      onOpen, onClose, mask, guide, showMask, pipe, placeholderChar, keepCharPositions, onMaskedValue,
      value, dropContent,
      dropIcon, theme, disabled, ...rest
    } = this.props;
    const { open } = this.state;
    const numWidgets = (dropContent ? 1 : 0) + (widgets ? widgets.length : 0);
    let decorations;
    if (numWidgets > 0) {
      let drop;
      if (dropContent) {
        const icon = <StyledWidget disabled={disabled}>{dropIcon}</StyledWidget>;
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
            {icon}
          </DropButton>
        );
      }
      decorations = (
        <Box
          style={{ position: 'absolute', right: 0, top: 0 }}
          align='center'
          direction='row'
        >
          {widgets.map((widget, index) => (
            <StyledWidget key={`widget_${index}`} theme={theme} disabled={disabled} >
              {widget}
            </StyledWidget>
          ))}
          {drop}
        </Box>
      );
    }
    return (
      <Keyboard onDown={this.onOpen} onUp={this.onClose}>
        <StyledMaskedInputContainer >
          <StyledMaskedInput
            theme={theme}
            disabled={disabled}
            numWidgets={numWidgets}
            aria-label={a11yTitle}
            ref={(ref) => {
                this.inputControlRef = ref && findDOMNode(ref).getElementsByTagName('input')[0];
              }}
            defaultValue={this.maskedValue(value)}
            onInput={this.onInput}
            {...rest}
          />
          {decorations}
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
