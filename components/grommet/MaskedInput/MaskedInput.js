import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { createTextMaskInputElement } from 'text-mask-core';
import { DropInput } from '../DropInput';
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
    type: 'text',
    guide: true,
    showMask: false,
    placeholderChar: placeholderChars.whitespace,
  }

  onInput = (event) => {
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

  maskedValue(value) {
    if (value === undefined) {
      return undefined;
    }
    const { mask } = this.props;
    if (value) {
      const conformed = transformMaskedValue(value, mask, this.props);
      return conformed;
    }
    return value;
  }

  render() {
    const {
      defaultValue,
      // eslint-disable-next-line no-unused-vars,max-len
      value, mask, guide, showMask, pipe, placeholderChar, keepCharPositions, onMaskedValue,
      ...rest
    } = this.props;
    return (
      <DropInput
        ref={(ref) => {
            this.inputControlRef = ref && findDOMNode(ref).getElementsByTagName('input')[0];
          }}
        value={this.maskedValue(value)}
        defaultValue={this.maskedValue(defaultValue)}
        onInput={this.onInput}
        {...rest}
      />
    );
  }
}

if (process.env.NODE_ENV !== 'production') {
  doc(MaskedInput);
}

export default MaskedInput;
