/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet/components/Text/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { color } from './color';
import { margin } from './margin';
import { size } from './size';
import { weight } from './weight';


export const Text = {
  category: categories.type,
  package: packages.grommet,
  doc: doc.doc({}).toJSON(),
  themeDoc: doc.themeDoc,
  examples: {
    _starter,
    color,
    margin,
    size,
    weight,
  },
};

