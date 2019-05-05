/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet/components/Calendar/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';
import { value } from './value.js';


export const Calendar = {
  name: 'Calendar',
  category: categories.visualization,
  package: packages.grommet,
  doc: doc.doc({}).toJSON(),
  themeDoc: doc.themeDoc,
  examples: {
    _starter,
    value,
  },
};

