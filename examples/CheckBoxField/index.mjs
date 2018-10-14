/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet-controls/components/withFormField/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { controlLabel } from './controlLabel';
import { inField } from './inField';


export const CheckBoxField = {
  category: categories.validation,
  package: packages.grommetControls,
  doc: doc.default({}, 'CheckBoxField').toJSON(),
  examples: {
    _starter,
    controlLabel,
    inField,
  },
};

