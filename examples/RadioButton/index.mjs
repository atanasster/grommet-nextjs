/* eslint-disable import/extensions,import/no-unresolved */
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { checked } from './checked';
import { disabled } from './disabled';
import { label } from './label';

export const RadioButton = {
  category: categories.input,
  package: packages.grommet,
  examples: {
    _starter,
    checked,
    disabled,
    label,
  },
};

