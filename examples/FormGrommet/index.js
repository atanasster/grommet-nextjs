/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet/components/Form/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';
import { advanced } from './advanced.js';


export const FormGrommet = {
  name: 'Form',
  category: categories.input,
  package: packages.grommet,
  doc: doc.doc({}).toJSON(),
  examples: {
    _starter,
    advanced,
  },
};

