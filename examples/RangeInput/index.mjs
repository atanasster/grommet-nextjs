/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet/components/RangeInput/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { value } from './value';


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

