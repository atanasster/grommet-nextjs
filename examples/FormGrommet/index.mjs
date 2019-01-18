/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet/components/Form/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { advanced } from './advanced';


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

