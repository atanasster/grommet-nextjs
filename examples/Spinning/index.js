/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet-controls/components/Spinning/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';
import { color } from './color.js';
import { kind } from './kind.js';
import { size } from './size.js';


export const Spinning = {
  name: 'Spinning',
  category: categories.controls,
  package: packages.grommetControls,
  doc: doc.default({}).toJSON(),
  examples: {
    _starter,
    color,
    kind,
    size,
  },
};

