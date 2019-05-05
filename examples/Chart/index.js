/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet/components/Chart/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';
import { color } from './color.js';
import { onClick } from './onClick.js';
import { onHover } from './onHover.js';
import { round } from './round.js';
import { thickness } from './thickness.js';
import { type } from './type.js';
import { values } from './values.js';


export const Chart = {
  name: 'Chart',
  category: categories.visualization,
  package: packages.grommet,
  doc: doc.doc({}).toJSON(),
  themeDoc: doc.themeDoc,
  examples: {
    _starter,
    color,
    onClick,
    onHover,
    round,
    thickness,
    type,
    values,
  },
};

