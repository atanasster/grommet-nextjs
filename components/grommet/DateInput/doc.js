import { describe, PropTypes } from 'react-desc';
import getAvailableAtGitHub from '../utils/doc';

export default (Element) => {
  const DocumentedElement = describe(Element)
    .availableAt(getAvailableAtGitHub({ url: 'https://github.com/atanasster/grommet-nextjs' }))
    .description(
      `A masked date entry field with a drop down calendar.
      All properties of MaskedInput apply
      `
    ).usage(`
    $ npm install grommet-controls 
    import { DateInput } from 'grommet-controls';
    <DateInput value={...} />
    `);

  DocumentedElement.propTypes = {
    autocorrect: PropTypes.bool.description('Use mask that wil attempt to auto-correct the entry as the user types'),
    bounds: PropTypes.arrayOf(PropTypes.string)
      .description(`An array of two numbers indicating the limits on
        navigation in ISO8601 format`),
    disabled: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]))
      .description(`Multiple dates in ISO8601 format that should not be
        selectable. Items that are an array indicate a range of dates.`),
    firstDayOfWeek: PropTypes.oneOf([0, 1])
      .description('The first day of the week. 0 for Sunday. 1 for Monday.'),
    locale: PropTypes.string.description('The locale to use.'),
    size: PropTypes.oneOf(['small', 'medium', 'large'])
      .description('Size of the calendar drop.'),
    value: PropTypes.oneOfType([
      PropTypes.instanceOf(Date),
      PropTypes.string,
    ]).description('The date value is Date format of ISO string'),
  };

  return DocumentedElement;
};
