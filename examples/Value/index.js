/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet-controls/components/Value/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';
import { color } from './color.js';
import { label } from './label.js';
import { size } from './size.js';
import { value } from './value.js';
import { weight } from './weight.js';


export const Value = {
  name: 'Value',
  category: categories.controls,
  package: packages.grommetControls,
  doc: doc.default({}).toJSON(),
  examples: {
    _starter,
    color,
    label,
    size,
    value,
    weight,
  },
};

