/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet/components/TextArea/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { focusIndicator } from './focusIndicator';
import { placeholder } from './placeholder';
import { plain } from './plain';
import { value } from './value';


export const TextArea = {
  name: 'TextArea',
  category: categories.input,
  package: packages.grommet,
  doc: doc.doc({}).toJSON(),
  themeDoc: doc.themeDoc,
  examples: {
    _starter,
    focusIndicator,
    placeholder,
    plain,
    value,
  },
};

