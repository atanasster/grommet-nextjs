/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet-controls/components/Avatar/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';


export const Avatar = {
  name: 'Avatar',
  category: categories.controls,
  package: packages.grommetControls,
  doc: doc({}).toJSON(),
  examples: {
    _starter,
  },
};

