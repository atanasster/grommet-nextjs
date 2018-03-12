import { describe, PropTypes } from 'react-desc';
import getAvailableAtGitHub from '../utils/doc';

export default (Element) => {
  const DocumentedElement = describe(Element)
    .availableAt(getAvailableAtGitHub({ url: 'https://github.com/atanasster/grommet-nextjs' }))
    .description(
      `A masked color entry field, with a drop button to select a color.
      All properties of MaskedInput apply
      `
    ).usage(`
      $ npm install grommet-controls \n 
      import { PasswordInput } from 'grommet-controls'; \n
      <PasswordInput value={...} />
    `);

  DocumentedElement.propTypes = {
    colors: PropTypes.object.isRequired.description('Color palette for the user to choose a color from.'),
  };

  return DocumentedElement;
};
