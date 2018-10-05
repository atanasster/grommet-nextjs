/* eslint-disable import/extensions,import/no-unresolved */
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { collapsible } from './collapsible';
import { title } from './title';
import { width } from './width';

export const Sidebar = {
  category: categories.controls,
  package: packages.grommetControls,
  examples: {
    _starter,
    collapsible,
    title,
    width,
  },
};

