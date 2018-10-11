/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet/components/Button/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { active } from './active';
import { color } from './color';
import { icon } from './icon';
import { label } from './label';
import { primary } from './primary';
import { reverse } from './reverse';

export const Button = {
  category: categories.controls,
  package: packages.grommet,
  doc: doc.doc({}).toJSON(),
  examples: {
    _starter,
    active,
    color,
    icon,
    label,
    primary,
    reverse,
  },
};

