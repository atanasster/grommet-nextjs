/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet/components/Menu/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { icon } from './icon';
import { label } from './label';


export const Menu = {
  category: categories.controls,
  package: packages.grommet,
  doc: doc.doc({}).toJSON(),
  examples: {
    _starter,
    icon,
    label,
  },
};

