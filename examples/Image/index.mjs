/* eslint-disable import/extensions,import/no-unresolved */
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { fit } from './fit';

export const Image = {
  category: categories.media,
  package: packages.grommet,
  examples: {
    _starter,
    fit,
  },
};

