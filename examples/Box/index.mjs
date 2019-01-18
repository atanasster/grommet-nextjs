/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet/components/Box/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { align } from './align';
import { animation } from './animation';
import { background } from './background';
import { border } from './border';
import { elevation } from './elevation';
import { gap } from './gap';
import { justify } from './justify';
import { margin } from './margin';
import { pad } from './pad';
import { round } from './round';
import { wrap } from './wrap';

export const Box = {
  name: 'Box',
  category: categories.layout,
  package: packages.grommet,
  doc: doc.doc({}).toJSON(),
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

