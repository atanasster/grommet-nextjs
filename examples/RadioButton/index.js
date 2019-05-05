/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet/components/RadioButton/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';
import { checked } from './checked.js';
import { disabled } from './disabled.js';
import { label } from './label.js';


export const RadioButton = {
  name: 'RadioButton',
  category: categories.input,
  package: packages.grommet,
  doc: doc.doc({}).toJSON(),
  themeDoc: doc.themeDoc,
  examples: {
    _starter,
    checked,
    disabled,
    label,
  },
};

