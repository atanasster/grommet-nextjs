/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet/components/Drop/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';


export const Drop = {
  name: 'Drop',
  category: categories.controls,
  package: packages.grommet,
  doc: doc.doc({}).toJSON(),
  themeDoc: doc.themeDoc,
  examples: {
    _starter,
  },
};

