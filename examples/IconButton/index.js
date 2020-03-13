/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet-controls/components/IconButton/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';


export const IconButton = {
  name: 'IconButton',
  category: categories.controls,
  package: packages.grommetControls,
  doc: doc({}).toJSON(),
  examples: {
    _starter,
  },
};

