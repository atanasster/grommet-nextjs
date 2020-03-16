/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet-controls/components/Card/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';
import { animation } from './animation.js';
import { background } from './background.js';
import { border } from './border.js';
import { elevation } from './elevation.js';
import { gap } from './gap.js';
import { pad } from './pad.js';
import { round } from './round.js';


export const Card = {
  name: 'Card',
  category: categories.controls,
  package: packages.grommetControls,
  doc: doc({}).toJSON(),
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

