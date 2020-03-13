/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet-controls/chartjs/RadarChart/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';


export const RadarChart = {
  name: 'RadarChart',
  category: categories.charts,
  package: packages.grommetControls,
  doc: doc({}).toJSON(),
  examples: {
    _starter,
  },
};

