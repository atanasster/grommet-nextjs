/* eslint-disable import/extensions,import/no-unresolved */
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { advanced } from './advanced';
import { onChange } from './onChange';
import { onInvalidForm } from './onInvalidForm';
import { onSubmit } from './onSubmit';
import { onSubmitError } from './onSubmitError';


export const Form = {
  category: categories.input,
  package: packages.grommetControls,
  examples: {
    _starter,
    advanced,
    onChange,
    onInvalidForm,
    onSubmit,
    onSubmitError,
  },
};

