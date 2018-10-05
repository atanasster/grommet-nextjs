/* eslint-disable import/extensions,import/no-unresolved */
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { viewIcon } from './viewIcon';


export const PasswordInput = {
  category: categories.input,
  package: packages.grommetControls,
  examples: {
    _starter,
    hideIcon: viewIcon,
    viewIcon,
  },
};

