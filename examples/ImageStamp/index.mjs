/* eslint-disable import/extensions,import/no-unresolved */
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { contain } from './contain';
import { round } from './round';
import { size } from './size';

export const ImageStamp = {
  category: categories.controls,
  package: packages.grommetControls,
  examples: {
    _starter,
    contain,
    round,
    size,
  },
};

