/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet/components/Diagram/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { connections } from './connections';


export const Diagram = {
  category: categories.visualization,
  package: packages.grommet,
  doc: doc.doc({}).toJSON(),
  examples: {
    _starter,
    connections,
  },
};

