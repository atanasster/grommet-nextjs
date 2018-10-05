/* eslint-disable import/extensions,import/no-unresolved */
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { checked } from './checked';
import { disabled } from './disabled';
import { reverse } from './reverse';
import { toggle } from './toggle';

export const CheckBox = {
  category: categories.input,
  package: packages.grommet,
  examples: {
    _starter,
    checked,
    disabled,
    reverse,
    toggle,
  },
};

