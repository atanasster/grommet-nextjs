/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet/components/Stack/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { anchor } from './anchor';


export const Stack = {
  category: categories.layout,
  package: packages.grommet,
  doc: doc.doc({}).toJSON(),
  themeDoc: doc.themeDoc,
  examples: {
    _starter,
    anchor,
  },
};

