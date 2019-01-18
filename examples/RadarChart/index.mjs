/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet-controls/components/RadarChart/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';


export const RadarChart = {
  name: 'RadarChart',
  category: categories.charts,
  package: packages.grommetControls,
  doc: doc.default({}).toJSON(),
  examples: {
    _starter,
  },
};

