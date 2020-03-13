/* eslint-disable import/extensions,import/no-unresolved */
import { doc } from 'grommet/components/Box/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';
import { align } from './align.js';
import { animation } from './animation.js';
import { background } from './background.js';
import { border } from './border.js';
import { elevation } from './elevation.js';
import { gap } from './gap.js';
import { justify } from './justify.js';
import { margin } from './margin.js';
import { pad } from './pad.js';
import { round } from './round.js';
import { wrap } from './wrap.js';

export const Box = {
  name: 'Box',
  category: categories.layout,
  package: packages.grommet,
  doc: doc({}).toJSON(),
  themeDoc: doc.themeDoc,
  examples: {
    _starter,
    align,
    animation,
    background,
    border,
    elevation,
    gap,
    justify,
    margin,
    pad,
    round,
    wrap,
  },
};

