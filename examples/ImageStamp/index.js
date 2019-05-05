/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet-controls/components/ImageStamp/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';
import { contain } from './contain.js';
import { round } from './round.js';
import { size } from './size.js';


export const ImageStamp = {
  name: 'ImageStamp',
  category: categories.controls,
  package: packages.grommetControls,
  doc: doc.default({}).toJSON(),
  examples: {
    _starter,
    contain,
    round,
    size,
  },
};

