/* eslint-disable import/extensions,import/no-unresolved */
import { doc } from 'grommet/components/DropButton/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';


export const DropButton = {
  name: 'DropButton',
  category: categories.controls,
  package: packages.grommet,
  doc: doc({}).toJSON(),
  themeDoc: doc.themeDoc,
  examples: {
    _starter,
  },
};

