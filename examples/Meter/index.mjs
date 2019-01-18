/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet/components/Meter/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { background } from './background';
import { round } from './round';
import { thickness } from './thickness';
import { type } from './type';
import { values } from './values';


export const Meter = {
  name: 'Meter',
  category: categories.visualization,
  package: packages.grommet,
  doc: doc.doc({}).toJSON(),
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

