import { describe, PropTypes } from 'react-desc';
import { a11yTitlePropType } from 'grommet/utils';
import getAvailableAtGitHub from '../utils/doc';

export default (Element) => {
  const DocumentedElement = describe(Element)
    .availableAt(getAvailableAtGitHub({ url: 'https://github.com/atanasster/grommet-nextjs' }))
    .description('A tag control with a label and icon.')
    .usage(
      `$ npm install grommet-controls 
    import { GrommetTag } from 'grommet-controls';
    <GrommetTag label={...} icon={...} />`
    );

  DocumentedElement.propTypes = {
    a11yTitle: a11yTitlePropType,
    border: PropTypes.oneOfType([
      PropTypes.oneOf(['top', 'left', 'bottom', 'right',
        'horizontal', 'vertical', 'all']),
      PropTypes.shape({
        color: PropTypes.string,
        side: PropTypes.oneOf(['top', 'left', 'bottom', 'right',
          'horizontal', 'vertical', 'all']),
        size: PropTypes.oneOf(['small', 'medium', 'large']),
      }),
    ]).description('Include a border.'),
    background: PropTypes.string.description('Fill color for the tag.'),
    disabled: PropTypes.bool.description(
      'Displays a disabled style for the tag',
    ),
    focusable: PropTypes.bool.description(
      'Whether the tag is focusable',
    ),
    icon: PropTypes.element.description('Icon element to place in the tag.'),
    label: PropTypes.node.description(
      'Label text to place next to the control.'
    ),
    onClick: PropTypes.func.description(
      'Function that will be called when the user clicks the background/label of the tag, or presses the Enter key.'
    ),

    onChange: PropTypes.func.description(
      'Function that will be called when the user clicks the icon on the tag, or presses the Space key.'
    ),
    reverse: PropTypes.bool.description(
      'Whether to show the label in front of the checkbox.'
    ),
    round: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'full']).description(
      'How much to round the corners of the tag.'
    ),
    size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'])
      .description('The font size of the label.'),
  };

  return DocumentedElement;
};
