/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet-controls/components/PagingTable/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { advanced } from './advanced';


export const PagingTable = {
  category: categories.controls,
  package: packages.grommetControls,
  doc: doc.default({}).toJSON(),
  examples: {
    _starter,
    advanced,
  },
};

