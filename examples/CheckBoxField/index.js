/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet-controls/components/withFormField/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';
import { controlLabel } from './controlLabel.js';
import { inField } from './inField.js';


export const CheckBoxField = {
  name: 'CheckBoxField',
  category: categories.validation,
  package: packages.grommetControls,
  doc: doc.default({}, 'CheckBoxField', 'A CheckBox field with form validation.').toJSON(),
  examples: {
    _starter,
    controlLabel,
    inField,
  },
};

