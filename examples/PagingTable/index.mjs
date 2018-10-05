/* eslint-disable import/extensions,import/no-unresolved */
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { advanced } from './advamced';

export const PagingTable = {
  category: categories.controls,
  package: packages.grommetControls,
  examples: {
    _starter,
    advanced,
  },
};

