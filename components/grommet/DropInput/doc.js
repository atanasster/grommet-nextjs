import { describe, PropTypes } from 'react-desc';
import { a11yTitlePropType } from 'grommet/utils';
import getAvailableAtGitHub from '../utils/doc';

export default (Element) => {
  const DocumentedElement = describe(Element)
    .availableAt(getAvailableAtGitHub({ url: 'https://github.com/atanasster/grommet-nextjs' }))
    .description('An Input control with an optional drop button with the specified \'dropContent\' or widgets.').usage(`
    $ npm install grommet-controls 
    import { DropInput } from 'grommet-controls';
    <DropInput dropContent={...} />
    `);

  DocumentedElement.propTypes = {
    a11yTitle: a11yTitlePropType,
    a11yDropTitle: PropTypes.string.description(
      'Custom drop button title to be used by screen readers..'
    ),
    placeholder: PropTypes.string.description(
      'Placeholder text to use when no value is provided.'
    ),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).description('Value for the field.'),
    id: PropTypes.string.description('The id attribute of the input.'),
    name: PropTypes.string.description('The name attribute of the input.'),
    disabled: PropTypes.bool.description('Setting to true causes the input to be disabled.'),
    onChange: PropTypes.func.description('Function that will be called when the user enters a new valuu.'),
    focusIndicator: PropTypes.bool.description('Whether the plain text input should receive a focus outline.'),
    plain: PropTypes.bool.description(
      `Whether this is a plain input with no border or padding.
Only use this when the containing context provides sufficient affordance`
    ),
    dropContent: PropTypes.element.description('Content to put inside the Drop.'),
    dropIcon: PropTypes.element.description('Icon for drop content.'),
    widgets: PropTypes.arrayOf(PropTypes.shape({
      icon: PropTypes.element.isRequired,
    })).description('Additional widgets to be placed next to the input.'),
    onClose: PropTypes.func.description('Callback for when the drop is closed'),
  };

  return DocumentedElement;
};
