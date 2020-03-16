/* eslint-disable import/extensions,import/no-unresolved */
import { doc } from 'grommet/components/Stack/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';
import { anchor } from './anchor.js';


export const Stack = {
  name: 'Stack',
  category: categories.layout,
  package: packages.grommet,
  doc: doc({}).toJSON(),
  themeDoc: doc.themeDoc,
  examples: {
    _starter,
    anchor,
  },
};

