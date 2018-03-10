import { createAutoCorrectedDatePipe, emailMask, createNumberMask } from 'text-mask-addons';
import MaskedInput, { placeholderChars, alphabetic, digit } from './MaskedInput';
import { StyledWidget } from './StyledMaskedInput';
import { maskedNumberValue } from './minMaxNumberPipe';
import { transformMaskedValue } from './utils';

export { default as MaskedInput } from './MaskedInput';
export { default as createMinMaxInputPipe } from './minMaxNumberPipe';

export {
  StyledWidget, placeholderChars, alphabetic, digit, createAutoCorrectedDatePipe,
  emailMask, createNumberMask, maskedNumberValue, transformMaskedValue,
};

export default MaskedInput;
