import { describe, PropTypes } from 'react-desc';
import getAvailableAtGitHub from '../utils/doc';

export default (Element) => {
  const DocumentedElement = describe(Element)
    .availableAt(getAvailableAtGitHub({ url: 'https://github.com/atanasster/grommet-nextjs' }))
    .description(
      `A masked number input, with widgets to increment/decrement the value. Automatically converts the value to a numeric type, so you dont have to parse strings in your onChange event.
      Additionally, all properties of MaskedInput apply
      `
    ).usage(`
      $ npm install grommet-controls \n 
      import { NumberInput } from 'grommet-controls'; \n
      <NumberInput value={...} />
    `);

  DocumentedElement.propTypes = {
    min: PropTypes.number.description('Minimum value.'),
    max: PropTypes.number.description('Maximum value.'),
    step: PropTypes.number.description('Steps to increase and decrease by.').defaultValue('1'),
    value: PropTypes.string.description('The numeric value'),
    disabled: PropTypes.bool.description('Setting to true causes the input to be disabled.'),
    addIcon: PropTypes.element.description('Icon for button to increment by step.'),
    subtractIcon: PropTypes.element.description('Icon for button to subtract a step.'),
    prefix: PropTypes.string.description('What to display in front of the value.'),
    suffix: PropTypes.string.description('What to display at the end of the value.'),
    thousandsSeparatorSymbol: PropTypes.string.description('A character with which to separate thousands..').defaultValue(','),
    allowDecimal: PropTypes.bool.description('whether or not to allow the user to enter a fraction with the amount.').defaultValue('true'),
    decimalSymbol: PropTypes.string.description('A character that will act as a decimal point.').defaultValue('.'),
    decimalLimit: PropTypes.number.description('How many digits to allow after the decimal.').defaultValue('2'),
    integerLimit: PropTypes.number.description('Limit on the length of the integer number.').defaultValue('unlimited'),
    requireDecimal: PropTypes.bool.description('Whether or not to always include a decimal point and placeholder for decimal digits after the integer.').defaultValue('false'),
    allowLeadingZeroes: PropTypes.bool.description('Whether or not to allow leading zeroes.').defaultValue('false'),
    updateToString: PropTypes.bool.description('Whether pass the value as a string in the onChange event.').defaultValue('false'),
  };

  return DocumentedElement;
};
