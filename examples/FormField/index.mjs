/* eslint-disable import/extensions,import/no-unresolved */
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { border } from './border';
import { error } from './error';
import { help } from './help';
import { label } from './label';

export const FormField = {
  category: categories.input,
  package: packages.grommet,
  examples: {
    _starter,
    border,
    error,
    help,
    label,
  },
};

