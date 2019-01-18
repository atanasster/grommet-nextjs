/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet-controls/components/PasswordInput/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { viewIcon } from './viewIcon';


export const PasswordInput = {
  name: 'PasswordInput',
  category: categories.input,
  package: packages.grommetControls,
  doc: doc.default({}).toJSON(),
  examples: {
    _starter,
    hideIcon: viewIcon,
    viewIcon,
  },
};

