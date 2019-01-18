/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet-controls/components/DateInput/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { autocorrect } from './autocorrect';
import { bounds } from './bounds';
import { disabled } from './disabled';
import { disabledDates } from './disabledDates';
import { firstDayOfWeek } from './firstDayOfWeek';
import { locale } from './locale';
import { size } from './size';
import { value } from './value';

export const DateInput = {
  name: 'DateInput',
  category: categories.input,
  package: packages.grommetControls,
  doc: doc.default({}).toJSON(),
  examples: {
    _starter,
    autocorrect,
    bounds,
    disabled,
    disabledDates,
    firstDayOfWeek,
    locale,
    size,
    value,
  },
};

