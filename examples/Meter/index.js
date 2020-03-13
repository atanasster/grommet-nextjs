/* eslint-disable import/extensions,import/no-unresolved */
import { doc } from 'grommet/components/Meter/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';
import { background } from './background.js';
import { round } from './round.js';
import { thickness } from './thickness.js';
import { type } from './type.js';
import { values } from './values.js';


export const Meter = {
  name: 'Meter',
  category: categories.visualization,
  package: packages.grommet,
  doc: doc({}).toJSON(),
  themeDoc: doc.themeDoc,
  examples: {
    _starter,
    background,
    round,
    thickness,
    type,
    values,
  },
};

