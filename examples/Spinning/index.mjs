/* eslint-disable import/extensions,import/no-unresolved */
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { color } from './color';
import { kind } from './kind';
import { size } from './size';

export const Spinning = {
  category: categories.controls,
  package: packages.grommetControls,
  examples: {
    _starter,
    color,
    kind,
    size,
  },
};

