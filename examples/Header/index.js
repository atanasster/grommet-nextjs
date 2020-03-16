/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet-controls/components/Header/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';


export const Header = {
  name: 'Header',
  category: categories.layout,
  package: packages.grommetControls,
  doc: doc({}).toJSON(),
  examples: {
    _starter,
  },
};

