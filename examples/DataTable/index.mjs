/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet/components/DataTable/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { search } from './search';


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

