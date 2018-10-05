/* eslint-disable import/extensions,import/no-unresolved */
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { placeholder } from './placeholder';
import { plain } from './plain';
import { size } from './size';
import { suggestions } from './suggestions';

export const TextInput = {
  category: categories.input,
  package: packages.grommet,
  examples: {
    _starter,
    placeholder,
    plain,
    size,
    suggestions,
  },
};

