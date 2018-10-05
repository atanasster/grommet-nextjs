/* eslint-disable import/extensions,import/no-unresolved */
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { colors } from './colors';


export const ColorInput = {
  category: categories.input,
  package: packages.grommetControls,
  examples: {
    _starter,
    colors,
  },
};

