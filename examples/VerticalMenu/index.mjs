/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet-controls/components/VerticalMenu/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { items } from './items';


export const VerticalMenu = {
  name: 'VerticalMenu',
  category: categories.navigation,
  package: packages.grommetControls,
  doc: doc.default({}).toJSON(),
  examples: {
    _starter,
    items,
  },
};

