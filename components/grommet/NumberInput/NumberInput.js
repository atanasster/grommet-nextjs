import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { Box } from 'grommet';
import { Add, Subtract } from 'grommet-icons';
import {
  createNumberMask, MaskedInput, StyledWidget, maskedNumberValue,
  createMinMaxInputPipe,
} from '../MaskedInput';
import doc from './doc';


class NumberInput extends Component {
  static defaultProps = {
    step: 1,
    addIcon: <Add />,
    subtractIcon: <Subtract />,
    prefix: '',
    suffix: '',
    thousandsSeparatorSymbol: ',',
    allowDecimal: true,
    decimalSymbol: '.',
    decimalLimit: 2,
    integerLimit: null,
    requireDecimal: false,
    allowLeadingZeroes: false,
    updateToString: false,
  }

  valueToNumber = (value) => {
    const {
      prefix, suffix, thousandsSeparatorSymbol, decimalSymbol,
    } = this.props;
    return maskedNumberValue({
      value, prefix, suffix, thousandsSeparatorSymbol, decimalSymbol,
    });
  }

  notifyOnChange(e, value) {
    const { onChange } = this.props;
    if (onChange) {
      onChange({ ...e, value, target: { ...this.inputControlRef, value } });
    }
  }
  addStep = (e) => {
    const {
      max, min, step, value,
    } = this.props;
    let val = this.valueToNumber(value) + step;
    if (Number.isNaN(val)) {
      if (min !== undefined) {
        val = min;
      } else {
        val = undefined;
      }
    } else if (max !== undefined) {
      val = Math.min(val, max);
    }
    this.notifyOnChange(e, val);
  }

  subtractStep = (e) => {
    const { min, step, value } = this.props;
    let val = this.valueToNumber(value) - step;
    if (Number.isNaN(val)) {
      if (min !== undefined) {
        val = min;
      } else {
        val = undefined;
      }
    } else if (min !== undefined) {
      val = Math.max(val, min);
    }
    this.notifyOnChange(e, val);
  }

  onChange = (e) => {
    const { onChange, updateToString } = this.props;
    if (onChange) {
      const value = updateToString ? e.target.value : this.valueToNumber(e.target.value);
      if (this.value !== value) {
        this.value = value;
        onChange({ ...e, target: { ...e.target, value } });
      }
    }
  };

  render() {
    const {
      onChange, min, max, step, pipe: userPipe,
      prefix, suffix, thousandsSeparatorSymbol, allowDecimal,
      decimalSymbol, decimalLimit, integerLimit, requireDecimal,
      allowLeadingZeroes, mask: userMask, addIcon, subtractIcon, disabled, ...rest
    } = this.props;
    const allowNegative = typeof min !== 'number' || min < 0;
    const includeThousandsSeparator = !!thousandsSeparatorSymbol;
    const mask = userMask || createNumberMask({
      prefix,
      suffix,
      includeThousandsSeparator,
      thousandsSeparatorSymbol,
      allowDecimal,
      decimalSymbol,
      decimalLimit,
      integerLimit,
      requireDecimal,
      allowNegative,
      allowLeadingZeroes,
    });
    const pipe = userPipe || createMinMaxInputPipe({
      mask, prefix, suffix, thousandsSeparatorSymbol, decimalSymbol, min, max, ...rest,
    });
    return (
      <MaskedInput
        ref={(ref) => { this.inputControlRef = ref && findDOMNode(ref).getElementsByTagName('input')[0]; }}
        pattern='[0-9]*'
        inputMode='numeric'
        onOpen={this.subtractStep}
        onClose={this.addStep}
        disabled={disabled}
        onChange={this.onChange}
        pipe={pipe}
        mask={mask}
        {...rest}
      >
        <Box direction='row'>
          <StyledWidget disabled={disabled} onClick={disabled ? undefined : this.addStep}>
            {addIcon}
          </StyledWidget>
          <StyledWidget disabled={disabled} onClick={disabled ? undefined : this.subtractStep}>
            {subtractIcon}
          </StyledWidget>
        </Box>
      </MaskedInput>
    );
  }
}

if (process.env.NODE_ENV !== 'production') {
  doc(NumberInput);
}

export default NumberInput;
