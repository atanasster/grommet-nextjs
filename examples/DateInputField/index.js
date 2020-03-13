/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet-controls/components/withFormField/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';
import { inField } from './inField.js';
import { maskFormat } from './maskFormat.js';
import { validation } from './validation.js';


export const DateInputField = {
  name: 'DateInputField',
  category: categories.validation,
  package: packages.grommetControls,
  doc: doc({}, 'DateInputField', 'A Date input field with form validation.').toJSON(),
  examples: {
    _starter,
    inField,
    maskFormat,
    validation,
  },
};

