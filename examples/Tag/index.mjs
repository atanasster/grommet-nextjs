/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet-controls/components/Tag/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { a11yTitle } from './a11yTitle';
import { background } from './background';
import { border } from './border';
import { disabled } from './disabled';
import { focusable } from './focusable';
import { icon } from './icon';
import { onChange } from './onChange';
import { onClick } from './onClick';
import { reverse } from './reverse';
import { round } from './round';
import { size } from './size';


export const Tag = {
  category: categories.controls,
  package: packages.grommetControls,
  doc: doc.default({}).toJSON(),
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

