/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet/components/Image/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';
import { fit } from './fit.js';

export const Image = {
  name: 'Image',
  category: categories.media,
  package: packages.grommet,
  doc: doc.doc({}).toJSON(),
  themeDoc: doc.themeDoc,
  examples: {
    _starter,
    fit,
  },
};

