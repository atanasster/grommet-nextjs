/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet/components/DataTable/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';
import { search } from './search.js';


export const DataTable = {
  name: 'DataTable',
  category: categories.visualization,
  package: packages.grommet,
  doc: doc.doc({}).toJSON(),
  themeDoc: doc.themeDoc,
  examples: {
    _starter,
    search,
  },
};

