/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet-controls/components/PolarChart/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';


export const PolarChart = {
  category: categories.charts,
  package: packages.grommetControls,
  doc: doc.default({}).toJSON(),
  examples: {
    _starter,
  },
};

