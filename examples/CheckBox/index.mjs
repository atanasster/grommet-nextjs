/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet/components/CheckBox/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { checked } from './checked';
import { disabled } from './disabled';
import { reverse } from './reverse';
import { toggle } from './toggle';


export const CheckBox = {
  category: categories.input,
  package: packages.grommet,
  doc: doc.doc({}).toJSON(),
  themeDoc: doc.themeDoc,
  examples: {
    _starter,
    checked,
    disabled,
    reverse,
    toggle,
  },
};

