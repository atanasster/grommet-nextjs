/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet/components/Select/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { dropAlign } from './dropAlign';
import { onSearch } from './onSearch';
import { placeholder } from './placeholder';
import { plain } from './plain';
import { searchPlaceholder } from './searchPlaceholder';
import { value } from './value';


export const Select = {
  category: categories.input,
  package: packages.grommet,
  doc: doc.doc({}).toJSON(),
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

