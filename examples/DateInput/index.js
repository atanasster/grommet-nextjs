/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet-controls/components/DateInput/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';
import { autocorrect } from './autocorrect.js';
import { bounds } from './bounds.js';
import { disabled } from './disabled.js';
import { disabledDates } from './disabledDates.js';
import { firstDayOfWeek } from './firstDayOfWeek.js';
import { locale } from './locale.js';
import { maskFormat } from './maskFormat.js';
import { size } from './size.js';
import { value } from './value.js';

export const DateInput = {
  name: 'DateInput',
  category: categories.input,
  package: packages.grommetControls,
  doc: doc({}).toJSON(),
  examples: {
    _starter,
    autocorrect,
    bounds,
    disabled,
    disabledDates,
    firstDayOfWeek,
    locale,
    maskFormat,
    size,
    value,
  },
};

