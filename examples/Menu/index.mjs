/* eslint-disable import/extensions,import/no-unresolved */
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { icon } from './icon';
import { label } from './label';

export const Menu = {
  category: categories.controls,
  package: packages.grommet,
  examples: {
    _starter,
    icon,
    label,
  },
};

