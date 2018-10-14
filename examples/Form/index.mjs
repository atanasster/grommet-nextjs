/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet-controls/components/Form/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { advanced } from './advanced';
import { onChange } from './onChange';
import { onInvalidForm } from './onInvalidForm';
import { onSubmit } from './onSubmit';
import { onSubmitError } from './onSubmitError';
import { profile } from './profile';

export const Form = {
  category: categories.validation,
  package: packages.grommetControls,
  doc: doc.default({}).toJSON(),
  examples: {
    _starter,
    advanced,
    onChange,
    onInvalidForm,
    onSubmit,
    onSubmitError,
    profile,
  },
};

