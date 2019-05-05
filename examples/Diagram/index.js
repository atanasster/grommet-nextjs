/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet/components/Diagram/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';
import { connections } from './connections.js';


export const Diagram = {
  name: 'Diagram',
  category: categories.visualization,
  package: packages.grommet,
  doc: doc.doc({}).toJSON(),
  themeDoc: doc.themeDoc,
  examples: {
    _starter,
    connections,
  },
};

