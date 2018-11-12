/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet/components/Image/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { fit } from './fit';

export const Image = {
  category: categories.media,
  package: packages.grommet,
  doc: doc.doc({}).toJSON(),
  themeDoc: doc.themeDoc,
  examples: {
    _starter,
    fit,
  },
};

