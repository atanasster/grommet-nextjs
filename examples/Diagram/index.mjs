/* eslint-disable import/extensions,import/no-unresolved */
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { connections } from './connections';

export const Diagram = {
  category: categories.visualization,
  package: packages.grommet,
  examples: {
    _starter,
    connections,
  },
};

