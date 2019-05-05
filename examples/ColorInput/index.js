/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet-controls/components/ColorInput/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';
import { colors } from './colors.js';


export const ColorInput = {
  name: 'ColorInput',
  category: categories.input,
  package: packages.grommetControls,
  doc: doc.default({}).toJSON(),
  examples: {
    _starter,
    colors,
  },
};

