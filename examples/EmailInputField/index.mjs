/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet-controls/components/withFormField/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { inField } from './inField';
import { validation } from './validation';


export const EmailInputField = {
  category: categories.validation,
  package: packages.grommetControls,
  doc: doc.default({}, 'EmailInputField').toJSON(),
  examples: {
    _starter,
    inField,
    validation,
  },
};

