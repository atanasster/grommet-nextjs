import { PropTypes } from 'react-desc';
import doc from 'grommet/components/Select/doc';

export default (MultiSelect) => {
  const DocumentedMultiSelect = doc(MultiSelect);
  DocumentedMultiSelect.propTypes.multiple = () => (
    PropTypes.bool.description('Whether to allow multiple options to be selected.')
  );
  return DocumentedMultiSelect;
};
