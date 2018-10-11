/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet/components/WorldMap/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';


export const WorldMap = {
  category: categories.visualization,
  package: packages.grommet,
  doc: doc.doc({}).toJSON(),
  examples: {
    _starter,
  },
};

