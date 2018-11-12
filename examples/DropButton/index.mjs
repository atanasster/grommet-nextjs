/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet/components/DropButton/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';


export const DropButton = {
  category: categories.controls,
  package: packages.grommet,
  doc: doc.doc({}).toJSON(),
  themeDoc: doc.themeDoc,
  examples: {
    _starter,
  },
};

