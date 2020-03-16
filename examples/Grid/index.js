/* eslint-disable import/extensions,import/no-unresolved */
import { doc } from 'grommet/components/Grid/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';


export const Grid = {
  name: 'Grid',
  category: categories.layout,
  package: packages.grommet,
  doc: doc({}).toJSON(),
  themeDoc: doc.themeDoc,
  examples: {
    _starter,
  },
};

