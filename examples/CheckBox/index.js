/* eslint-disable import/extensions,import/no-unresolved */
import { doc } from 'grommet/components/CheckBox/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';
import { checked } from './checked.js';
import { disabled } from './disabled.js';
import { reverse } from './reverse.js';
import { toggle } from './toggle.js';


export const CheckBox = {
  name: 'CheckBox',
  category: categories.input,
  package: packages.grommet,
  doc: doc({}).toJSON(),
  themeDoc: doc.themeDoc,
  examples: {
    _starter,
    checked,
    disabled,
    reverse,
    toggle,
  },
};

