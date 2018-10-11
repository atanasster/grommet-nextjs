/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet-controls/components/Sidebar/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { collapsible } from './collapsible';
import { title } from './title';
import { width } from './width';


export const Sidebar = {
  category: categories.controls,
  package: packages.grommetControls,
  doc: doc.default({}).toJSON(),
  examples: {
    _starter,
    collapsible,
    title,
    width,
  },
};

