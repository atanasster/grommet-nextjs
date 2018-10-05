/* eslint-disable import/extensions,import/no-unresolved */
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { anchor } from './anchor';

export const Stack = {
  category: categories.layout,
  package: packages.grommet,
  examples: {
    _starter,
    anchor,
  },
};

