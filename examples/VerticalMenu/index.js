/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet-controls/components/VerticalMenu/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';
import { items } from './items.js';


export const VerticalMenu = {
  name: 'VerticalMenu',
  category: categories.navigation,
  package: packages.grommetControls,
  doc: doc({}).toJSON(),
  examples: {
    _starter,
    items,
  },
};

