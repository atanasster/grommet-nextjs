/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet-controls/components/Notification/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';
import { a11yTitle } from './a11yTitle.js';
import { closer } from './closer.js';
import { icon } from './icon.js';
import { locale } from './locale.js';
import { percentComplete } from './percentComplete.js';
import { reverse } from './reverse.js';
import { size } from './size.js';
import { state } from './state.js';
import { status } from './status.js';
import { strong } from './strong.js';
import { timestamp } from './timestamp.js';


export const Notification = {
  name: 'Notification',
  category: categories.controls,
  package: packages.grommetControls,
  doc: doc.default({}).toJSON(),
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

