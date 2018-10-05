/* eslint-disable import/extensions,import/no-unresolved */
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { focusIndicator } from './focusIndicator';
import { placeholder } from './placeholder';
import { plain } from './plain';
import { value } from './value';

export const TextArea = {
  category: categories.input,
  package: packages.grommet,
  examples: {
    _starter,
    focusIndicator,
    placeholder,
    plain,
    value,
  },
};

