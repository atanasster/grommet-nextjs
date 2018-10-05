/* eslint-disable import/extensions,import/no-unresolved */
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { color } from './color';
import { label } from './label';
import { size } from './size';
import { value } from './value';
import { weight } from './weight';

export const Value = {
  category: categories.controls,
  package: packages.grommetControls,
  examples: {
    _starter,
    color,
    label,
    size,
    value,
    weight,
  },
};

