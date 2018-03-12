import { describe, PropTypes } from 'react-desc';
import getAvailableAtGitHub from '../utils/doc';

export default (Element) => {
  const DocumentedElement = describe(Element)
    .availableAt(getAvailableAtGitHub({ url: 'https://github.com/atanasster/grommet-nextjs' }))
    .description(
      `A color selection element, with custom color palettes.
      `
    ).usage(`
      $ npm install grommet-controls \n 
      import { Colors } from 'grommet-controls'; \n
      <Colors colors={...} />
    `);

  DocumentedElement.propTypes = {
    colors: PropTypes.object.isRequired.description('Color palette for the user to choose a color from.'),
    color: PropTypes.string.description('The default selected color.'),
    onSelect: PropTypes.func.description('Called with an object containing the selected color, rowName and colorName.'),
    size: PropTypes.oneOf(['small', 'medium', 'large'])
      .description('What size to make it.'),
    columns: PropTypes.number.description('The maximum number of colors per row, if left emty will be calculated automatically.'),
    wrap: PropTypes.string.description('If true, will wrap any rows of colors that exceed the columns limit, otherwise will truncate larger rows.'),
  };

  return DocumentedElement;
};
