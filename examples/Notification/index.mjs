/* eslint-disable import/extensions,import/no-unresolved */
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { a11yTitle } from './a11yTitle';
import { closer } from './closer';
import { icon } from './icon';
import { locale } from './locale';
import { percentComplete } from './percentComplete';
import { reverse } from './reverse';
import { size } from './size';
import { state } from './state';
import { status } from './status';
import { strong } from './strong';
import { timestamp } from './timestamp';

export const Notification = {
  category: categories.controls,
  package: packages.grommetControls,
  examples: {
    _starter,
    a11yTitle,
    closer,
    icon,
    locale,
    percentComplete,
    reverse,
    size,
    state,
    status,
    strong,
    timestamp,
  },
};

