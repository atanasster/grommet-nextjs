/* eslint-disable import/extensions,import/no-unresolved */
import { doc } from 'grommet/components/Markdown/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';
import { components } from './components.js';


export const Markdown = {
  name: 'Markdown',
  category: categories.type,
  package: packages.grommet,
  doc: doc({}).toJSON(),
  themeDoc: doc.themeDoc,
  examples: {
    _starter,
    components,
  },
};

