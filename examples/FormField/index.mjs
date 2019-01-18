/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet/components/FormField/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { border } from './border';
import { error } from './error';
import { help } from './help';
import { label } from './label';


export const FormField = {
  name: 'FormField',
  category: categories.input,
  package: packages.grommet,
  doc: doc.doc({}).toJSON(),
  examples: {
    _starter,
    border,
    error,
    help,
    label,
  },
};

