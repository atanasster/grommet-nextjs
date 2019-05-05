/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet/components/Select/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';
import { dropAlign } from './dropAlign.js';
import { onSearch } from './onSearch.js';
import { placeholder } from './placeholder.js';
import { plain } from './plain.js';
import { searchPlaceholder } from './searchPlaceholder.js';
import { value } from './value.js';


export const Select = {
  name: 'Select',
  category: categories.input,
  package: packages.grommet,
  doc: doc.doc({}).toJSON(),
  themeDoc: doc.themeDoc,
  examples: {
    _starter,
    dropAlign,
    onSearch,
    placeholder,
    plain,
    searchPlaceholder,
    value,
  },
};

