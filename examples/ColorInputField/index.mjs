/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet-controls/components/withFormField/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { inField } from './inField';


export const ColorInputField = {
  category: categories.validation,
  package: packages.grommetControls,
  doc: doc.default({}, 'ColorInputField').toJSON(),
  examples: {
    _starter,
    inField,
  },
};

