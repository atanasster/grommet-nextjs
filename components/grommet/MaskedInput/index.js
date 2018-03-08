import { createAutoCorrectedDatePipe, createNumberMask, emailMask } from 'text-mask-addons';
import MaskedInput, { placeholderChars, alphabetic, digit } from './MaskedInput';
import { StyledWidget } from './StyledMaskedInput';

export { default as MaskedInput } from './MaskedInput';

export {
  StyledWidget, placeholderChars, alphabetic, digit, createAutoCorrectedDatePipe,
  createNumberMask, emailMask,
};

export default MaskedInput;
