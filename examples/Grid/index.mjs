/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet/components/Grid/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';


export const Grid = {
  name: 'Grid',
  category: categories.layout,
  package: packages.grommet,
  doc: doc.doc({}).toJSON(),
  themeDoc: doc.themeDoc,
  examples: {
    _starter,
  },
};

