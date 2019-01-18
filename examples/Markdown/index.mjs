/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet/components/Markdown/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';


export const Markdown = {
  name: 'Markdown',
  category: categories.type,
  package: packages.grommet,
  doc: doc.doc({}).toJSON(),
  themeDoc: doc.themeDoc,
  examples: {
    _starter,
  },
};

