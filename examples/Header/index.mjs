/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet-controls/components/Header/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';


export const Header = {
  name: 'Header',
  category: categories.layout,
  package: packages.grommetControls,
  doc: doc.default({}).toJSON(),
  examples: {
    _starter,
  },
};

