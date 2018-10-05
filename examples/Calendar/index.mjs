/* eslint-disable import/extensions,import/no-unresolved */
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { value } from './value';

export const Calendar = {
  category: categories.visualization,
  package: packages.grommet,
  examples: {
    _starter,
    value,
  },
};

