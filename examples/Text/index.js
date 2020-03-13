/* eslint-disable import/extensions,import/no-unresolved */
import { doc } from 'grommet/components/Text/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';
import { color } from './color.js';
import { margin } from './margin.js';
import { size } from './size.js';
import { weight } from './weight.js';


export const Text = {
  name: 'Text',
  category: categories.type,
  package: packages.grommet,
  doc: doc({}).toJSON(),
  themeDoc: doc.themeDoc,
  examples: {
    _starter,
    color,
    margin,
    size,
    weight,
  },
};

