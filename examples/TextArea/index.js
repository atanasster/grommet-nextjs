/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet/components/TextArea/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';
import { focusIndicator } from './focusIndicator.js';
import { placeholder } from './placeholder.js';
import { plain } from './plain.js';
import { value } from './value.js';


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

