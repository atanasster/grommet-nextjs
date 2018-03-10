import { conformToMask } from 'text-mask-core';

const strCaretTrap = '[]';

const processCaretTraps = (mask) => {
  const indexes = [];

  let indexOfCaretTrap;
  while(indexOfCaretTrap = mask.indexOf(strCaretTrap), indexOfCaretTrap !== -1) { // eslint-disable-line
    indexes.push(indexOfCaretTrap);
    mask.splice(indexOfCaretTrap, 1);
  }
  return mask;
};

// eslint-disable-next-line import/prefer-default-export
export const transformMaskedValue = (value, providedMask, props = {}) => {
  if (!providedMask) {
    return value;
  }
  let safeValue;
  if (value === undefined || value === null) {
    safeValue = '';
  } else {
    safeValue = value.toString();
  }
  let mask;
  if (typeof providedMask === 'function') {
    mask = providedMask(safeValue, props);

    // disable masking if `mask` is `false`
    if (mask === false) { return safeValue; }
    // The processed mask is what we're interested in
    mask = processCaretTraps(mask);
  // If the `providedMask` is not a function, we just use it as-is.
  } else {
    mask = providedMask;
  }
  let conformedValue = value;
  const {
    guide, placeholderChar, pipe, placeholder, currentCaretPosition,
    showMask, keepCharPositions,
  } = props;

  const conformToMaskConfig = {
    previousPlaceholder: placeholder,
    guide,
    placeholderChar,
    pipe,
    currentCaretPosition,
    keepCharPositions,
  };
  const conformed = conformToMask(safeValue, mask, conformToMaskConfig);
  if (conformed) {
    ({ conformedValue } = conformed);
  }
  if (typeof pipe === 'function') {
    const pipeResults = pipe(conformedValue, { rawValue: safeValue, ...conformToMaskConfig });
    if (typeof pipeResults === 'string') {
      conformedValue = pipeResults;
    }
  }
  if (conformedValue === placeholder) {
    conformedValue = showMask ? placeholder : '';
  }
  return conformedValue;
};
