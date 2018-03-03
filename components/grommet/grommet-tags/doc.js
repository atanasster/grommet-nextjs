import { describe, PropTypes } from 'react-desc';

import { a11yTitlePropType } from 'grommet/utils';
import getAvailableAtGitHub from '../utils/doc';

export default (Tags) => {
  const DocumentedTags = describe(Tags)
    .availableAt(getAvailableAtGitHub({ url: 'https://github.com/atanasster/grommet-nextjs' }))
    .description(
      'An select-like field with optional search capability.'
    ).usage(`
    $ npm install grommet-controls 
    import { GrommetTags } from 'grommet-controls';
    <Tags />
    `);

  DocumentedTags.propTypes = {
    a11yTitle: a11yTitlePropType,
    activeOptionIndex: PropTypes.number.description(
      'Highlight a given option at the provided index.'
    ),
    children: PropTypes.func.description(
      'Function that will be called when each option is rendered.'
    ),
    tagProps: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        label: PropTypes.func.description('Function to render the labels.'),
      }),
    ]).description('Tag elements <Box /> and <Text /> properties'),
    focusIndicator: PropTypes.bool.description(
      'Whether when \'plain\' it should receive a focus outline.'
    ),
    onChange: PropTypes.func.description(
      'Function that will be called when the user selects an option.'
    ),
    placeholder: PropTypes.string.description(
      'Placeholder text to use when no value is provided.'
    ),
    plain: PropTypes.bool.description(
      'Whether this is a plain Select input with no border or padding.'
    ),
    value: PropTypes.oneOfType([
      PropTypes.string, PropTypes.element, PropTypes.object,
      PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.string, PropTypes.element, PropTypes.object,
      ])),
    ]).description('List of tag items to display.'),
  };

  return DocumentedTags;
};
