/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet-controls/components/ColorInput/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { colors } from './colors';


export const ColorInput = {
  category: categories.input,
  package: packages.grommetControls,
  doc: doc.default({}).toJSON(),
  examples: {
    _starter,
    colors,
  },
};

