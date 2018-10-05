/* eslint-disable import/extensions,import/no-unresolved */
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { color } from './color';
import { margin } from './margin';
import { size } from './size';
import { weight } from './weight';

export const Text = {
  category: categories.type,
  package: packages.grommet,
  examples: {
    _starter,
    color,
    margin,
    size,
    weight,
  },
};

