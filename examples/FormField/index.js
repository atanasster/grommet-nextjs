/* eslint-disable import/extensions,import/no-unresolved */
import { doc } from 'grommet/components/FormField/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';
import { border } from './border.js';
import { error } from './error.js';
import { help } from './help.js';
import { label } from './label.js';


export const FormField = {
  name: 'FormField',
  category: categories.input,
  package: packages.grommet,
  doc: doc({}).toJSON(),
  examples: {
    _starter,
    border,
    error,
    help,
    label,
  },
};

