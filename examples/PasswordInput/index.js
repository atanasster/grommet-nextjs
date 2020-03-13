/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet-controls/components/PasswordInput/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';
import { viewIcon } from './viewIcon.js';


export const PasswordInput = {
  name: 'PasswordInput',
  category: categories.input,
  package: packages.grommetControls,
  doc: doc({}).toJSON(),
  examples: {
    _starter,
    hideIcon: viewIcon,
    viewIcon,
  },
};

