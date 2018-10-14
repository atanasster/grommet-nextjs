/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet/components/Anchor/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { icon } from './icon';
import { label } from './label';
import { primary } from './primary';
import { reverse } from './reverse';

export const Anchor = {
  category: categories.navigation,
  package: packages.grommet,
  doc: doc.doc({}).toJSON(),
  examples: {
    _starter,
    icon,
    label,
    primary,
    reverse,
  },
};

