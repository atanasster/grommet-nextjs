import { describe, PropTypes } from 'react-desc';
import { a11yTitlePropType } from 'grommet/utils';
import getAvailableAtGitHub from '../utils/doc';


export default (Element) => {
  const DocumentedElement = describe(Element)
    .availableAt(getAvailableAtGitHub({ url: 'https://github.com/atanasster/grommet-nextjs' }))
    .description('A Box to display notification messages.')
    .usage(
      `$ npm install grommet-controls 
    import { GrommetNotification } from 'grommet-controls';
    <GrommetNotification message={...} onClose={...} />`
    );
  DocumentedElement.propTypes = {
    a11yTitle: a11yTitlePropType,
    status: PropTypes.oneOf(['ok', 'info', 'warning', 'error', 'unknown', 'disabled']).description('Status color.'),
    size: PropTypes.oneOf(['small', 'medium', 'large'])
      .description('The font size of the notification message.'),

    state: PropTypes.string.description('State label.'),
    strong: PropTypes.bool.description('Heading bold state.'),
    message: PropTypes.string.description(
      'Message to be displayed.',
    ).isRequired,
    icon: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.element,
    ]).description('Notification icon.'),
    closer: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.element,
    ]).description('Closer icon.'),
    onClose: PropTypes.func.description(
      'Function that will be called when the user closes the notification.'
    ),
    percentComplete: PropTypes.number.description('Percent complete Meter for task notifications.'),
    timestamp: PropTypes.object.description('timestamp for the notification (Date).'),
    locale: PropTypes.string.description('The locale to use for timestamp, if provided.'),
    reverse: PropTypes.bool.description('If true, reverse the order of the Notification elements.'),
  };
  return DocumentedElement;
};
