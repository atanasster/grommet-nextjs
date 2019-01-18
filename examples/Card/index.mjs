/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet-controls/components/Card/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { animation } from './animation';
import { background } from './background';
import { border } from './border';
import { elevation } from './elevation';
import { gap } from './gap';
import { pad } from './pad';
import { round } from './round';


export const Card = {
  name: 'Card',
  category: categories.controls,
  package: packages.grommetControls,
  doc: doc.default({}).toJSON(),
  examples: {
    _starter,
    animation,
    background,
    border,
    elevation,
    gap,
    pad,
    round,
  },
};

