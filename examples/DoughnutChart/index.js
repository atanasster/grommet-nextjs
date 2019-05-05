/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet-controls/chartjs/DoughnutChart/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';

export const DoughnutChart = {
  name: 'DoughnutChart',
  category: categories.charts,
  package: packages.grommetControls,
  doc: doc.default({}).toJSON(),
  examples: {
    _starter,
  },
};

