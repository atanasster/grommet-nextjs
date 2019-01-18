/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet-controls/components/Spinning/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { color } from './color';
import { kind } from './kind';
import { size } from './size';


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

