/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet/components/RangeInput/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';
import { value } from './value.js';


export const RangeInput = {
  name: 'RangeInput',
  category: categories.input,
  package: packages.grommet,
  doc: doc.doc({}).toJSON(),
  themeDoc: doc.themeDoc,
  examples: {
    _starter,
    value,
  },
};

