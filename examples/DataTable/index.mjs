/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet/components/DataTable/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { search } from './search';


export const DataTable = {
  category: categories.visualization,
  package: packages.grommet,
  doc: doc.doc({}).toJSON(),
  examples: {
    _starter,
    search,
  },
};

