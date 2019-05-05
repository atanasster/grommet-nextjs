/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet-controls/components/Sidebar/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';
import { collapsible } from './collapsible.js';
import { title } from './title.js';
import { width } from './width.js';


export const Sidebar = {
  name: 'Sidebar',
  category: categories.layout,
  package: packages.grommetControls,
  doc: doc.default({}).toJSON(),
  examples: {
    _starter,
    collapsible,
    title,
    width,
  },
};

