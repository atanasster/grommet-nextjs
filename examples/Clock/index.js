/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet/components/Clock/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';
import { precision } from './precision.js';
import { run } from './run.js';
import { size } from './size.js';
import { type } from './type.js';


export const Clock = {
  name: 'Clock',
  category: categories.visualization,
  package: packages.grommet,
  doc: doc.doc({}).toJSON(),
  themeDoc: doc.themeDoc,
  examples: {
    _starter,
    precision,
    run,
    size,
    type,
  },
};

