/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet-controls/chartjs/LineChart/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';


export const LineChart = {
  name: 'LineChart',
  category: categories.charts,
  package: packages.grommetControls,
  doc: doc.default({}).toJSON(),
  examples: {
    _starter,
  },
};

