/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet-controls/components/Avatar/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';


export const Avatar = {
  name: 'Avatar',
  category: categories.controls,
  package: packages.grommetControls,
  doc: doc.default({}).toJSON(),
  examples: {
    _starter,
  },
};

