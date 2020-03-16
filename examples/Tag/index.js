/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet-controls/components/Tag/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';
import { a11yTitle } from './a11yTitle.js';
import { background } from './background.js';
import { border } from './border.js';
import { disabled } from './disabled.js';
import { focusable } from './focusable.js';
import { icon } from './icon.js';
import { onChange } from './onChange.js';
import { onClick } from './onClick.js';
import { reverse } from './reverse.js';
import { round } from './round.js';
import { size } from './size.js';


export const Tag = {
  name: 'Tag',
  category: categories.controls,
  package: packages.grommetControls,
  doc: doc({}).toJSON(),
  examples: {
    _starter,
    a11yTitle,
    background,
    border,
    disabled,
    focusable,
    icon,
    onChange,
    onClick,
    reverse,
    round,
    size,
  },
};

