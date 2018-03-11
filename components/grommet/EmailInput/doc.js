import { describe } from 'react-desc';
import getAvailableAtGitHub from '../utils/doc';

export default (Element) => {
  const DocumentedElement = describe(Element)
    .availableAt(getAvailableAtGitHub({ url: 'https://github.com/atanasster/grommet-nextjs' }))
    .description(
      `A masked input with a default mask for handling email addresses.
      All properties of MaskedInput apply
      `
    ).usage(`
      $ npm install grommet-controls \n 
      import { EmailInput } from 'grommet-controls'; \n
      <EmailInput value={...} />
    `);

  DocumentedElement.propTypes = {

  };

  return DocumentedElement;
};
