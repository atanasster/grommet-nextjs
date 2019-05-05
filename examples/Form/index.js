/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet-controls/components/Form/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';
import { advanced } from './advanced.js';
import { onChange } from './onChange.js';
import { onInvalidForm } from './onInvalidForm.js';
import { onSubmit } from './onSubmit.js';
import { onSubmitError } from './onSubmitError.js';
import { object } from './object.js';
import { profile } from './profile.js';

export const Form = {
  name: 'Form',
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
    object,
    profile,
  },
};

