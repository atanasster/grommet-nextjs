/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet/components/Clock/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { precision } from './precision';
import { run } from './run';
import { size } from './size';
import { type } from './type';


export const Clock = {
  category: categories.visualization,
  package: packages.grommet,
  doc: doc.doc({}).toJSON(),
  examples: {
    _starter,
    precision,
    run,
    size,
    type,
  },
};

