/* eslint-disable import/extensions,import/no-unresolved */
import { doc } from 'grommet/components/Button/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';
import { active } from './active.js';
import { color } from './color.js';
import { icon } from './icon.js';
import { label } from './label.js';
import { primary } from './primary.js';
import { reverse } from './reverse.js';

export const Button = {
  name: 'Button',
  category: categories.navigation,
  package: packages.grommet,
  doc: doc({}).toJSON(),
  themeDoc: doc.themeDoc,
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

