/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet-controls/components/EmailInput/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';


export const EmailInput = {
  name: 'EmailInput',
  category: categories.input,
  package: packages.grommetControls,
  doc: doc.default({}).toJSON(),
  examples: {
    _starter,
  },
};

