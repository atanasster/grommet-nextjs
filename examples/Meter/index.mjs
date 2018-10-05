/* eslint-disable import/extensions,import/no-unresolved */
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { background } from './background';
import { round } from './round';
import { thickness } from './thickness';
import { type } from './type';
import { values } from './values';

export const Meter = {
  category: categories.visualization,
  package: packages.grommet,
  examples: {
    _starter,
    background,
    round,
    thickness,
    type,
    values,
  },
};

