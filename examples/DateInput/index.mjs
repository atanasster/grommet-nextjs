/* eslint-disable import/extensions,import/no-unresolved */
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
  category: categories.input,
  package: packages.grommetControls,
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

