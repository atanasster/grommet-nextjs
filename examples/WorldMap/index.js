/* eslint-disable import/extensions,import/no-unresolved */
import { doc } from 'grommet/components/WorldMap/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';


export const WorldMap = {
  name: 'WorldMap',
  category: categories.visualization,
  package: packages.grommet,
  doc: doc({}).toJSON(),
  themeDoc: doc.themeDoc,
  examples: {
    _starter,
  },
};

