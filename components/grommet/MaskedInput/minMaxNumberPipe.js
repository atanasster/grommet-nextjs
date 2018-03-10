import { transformMaskedValue } from './utils';

export const maskedNumberValue = ({
  value, prefix, suffix, thousandsSeparatorSymbol, decimalSymbol,
}) => {
  let val = value;
  if (typeof val === 'string') {
    val = val.replace(new RegExp(`[${prefix}${suffix}${thousandsSeparatorSymbol}]`, 'g'), '');
    val = parseFloat(val.replace(decimalSymbol, '.'));
    if (Number.isNaN(val)) {
      val = undefined;
    }
  }
  return val;
};

export default ({
  min, max, mask, ...props
}) => (
  (conformedValue) => {
    if (typeof min === 'number' || typeof max === 'number') {
      const value = maskedNumberValue({ ...props, value: conformedValue });
      if (typeof value === 'number') {
        if (typeof min === 'number' && value < min) {
          const resolved = transformMaskedValue(min, mask, props);
          if (resolved === undefined) {
            return false;
          }
          return { value: resolved };
        }
        if (typeof max === 'number' && value > max) {
          const resolved = transformMaskedValue(max, mask, props);
          if (resolved === undefined) {
            return false;
          }
          return { value: resolved };
        }
      }
    }
    return { value: conformedValue };
  }
);

