/* eslint-disable import/extensions,import/no-unresolved */
import { doc } from 'grommet/components/Anchor/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';
import { icon } from './icon.js';
import { label } from './label.js';
import { primary } from './primary.js';
import { reverse } from './reverse.js';

export const Anchor = {
  name: 'Anchor',
  category: categories.navigation,
  package: packages.grommet,
  doc: doc({}).toJSON(),
  themeDoc: doc.themeDoc,
  examples: {
    _starter,
    icon,
    label,
    primary,
    reverse,
  },
};

