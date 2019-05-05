/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet/components/Video/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';
import { controls } from './controls.js';
import { fit } from './fit.js';


export const Video = {
  name: 'Video',
  category: categories.media,
  package: packages.grommet,
  doc: doc.doc({}).toJSON(),
  themeDoc: doc.themeDoc,
  examples: {
    _starter,
    controls,
    fit,
  },
};

