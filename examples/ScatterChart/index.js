/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet-controls/chartjs/ScatterChart/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';


export const ScatterChart = {
  name: 'ScatterChart',
  category: categories.charts,
  package: packages.grommetControls,
  doc: doc.default({}).toJSON(),
  examples: {
    _starter,
  },
};

