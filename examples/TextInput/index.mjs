/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet/components/TextInput/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { placeholder } from './placeholder';
import { plain } from './plain';
import { size } from './size';
import { suggestions } from './suggestions';


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

