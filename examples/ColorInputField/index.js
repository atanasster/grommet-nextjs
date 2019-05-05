/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet-controls/components/withFormField/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';
import { inField } from './inField.js';


export const ColorInputField = {
  name: 'ColorInputField',
  category: categories.validation,
  package: packages.grommetControls,
  doc: doc.default({}, 'ColorInputField', 'A Color selection field with form validation.').toJSON(),
  examples: {
    _starter,
    inField,
  },
};

