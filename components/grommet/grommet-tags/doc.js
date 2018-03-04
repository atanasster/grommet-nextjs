import { describe, PropTypes } from 'react-desc';

import { a11yTitlePropType } from 'grommet/utils';
import getAvailableAtGitHub from '../utils/doc';

export default (Tags) => {
  const DocumentedTags = describe(Tags)
    .availableAt(getAvailableAtGitHub({ url: 'https://github.com/atanasster/grommet-nextjs' }))
    .description(
      'A list of tags that can be removed.'
    ).usage(`
    $ npm install grommet-controls 
    import { GrommetTags } from 'grommet-controls';
    <Tags />
    `);

  DocumentedTags.propTypes = {
    a11yTitle: a11yTitlePropType,
    children: PropTypes.func.description(
      'Function that will be called when each option is rendered.'
    ),
    icon: PropTypes.element.description('Icon element to remove the tag.'),
    tagProps: PropTypes.object.description('Tag elements `<Box />` and `<Text />` properties'),
    onChange: PropTypes.func.description(
      'Function that will be called when the user removes a tag.'
    ),
    onClick: PropTypes.func.description(
      'Function that will be called when the user clicks on a tag.'
    ),
    direction: PropTypes.oneOf(['row', 'column']).description(
      'The orientation to layout the child tags in.'
    ).defaultValue('column'),
    placeholder: PropTypes.string.description(
      'Placeholder text to use when no value is provided.'
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
