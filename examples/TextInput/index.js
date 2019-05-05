/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet/components/TextInput/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';
import { placeholder } from './placeholder.js';
import { plain } from './plain.js';
import { size } from './size.js';
import { suggestions } from './suggestions.js';


export const TextInput = {
  name: 'TextInput',
  category: categories.input,
  package: packages.grommet,
  doc: doc.doc({}).toJSON(),
  themeDoc: doc.themeDoc,
  examples: {
    _starter,
    placeholder,
    plain,
    size,
    suggestions,
  },
};

