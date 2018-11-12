/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet/components/Menu/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { icon } from './icon';
import { label } from './label';


export const Menu = {
  category: categories.navigation,
  package: packages.grommet,
  doc: doc.doc({}).toJSON(),
  themeDoc: doc.themeDoc,
  examples: {
    _starter,
    icon,
    label,
  },
};

