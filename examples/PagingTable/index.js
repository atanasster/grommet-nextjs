/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet-controls/components/PagingTable/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';
import { advanced } from './advanced.js';


export const PagingTable = {
  name: 'PagingTable',
  category: categories.controls,
  package: packages.grommetControls,
  doc: doc({}).toJSON(),
  examples: {
    _starter,
    advanced,
  },
};

