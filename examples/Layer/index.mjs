/* eslint-disable import/extensions,import/no-unresolved */
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { full } from './full';
import { margin } from './margin';
import { modal } from './modal';
import { plain } from './plain';
import { position } from './position';


export const Layer = {
  category: categories.layout,
  package: packages.grommet,
  examples: {
    _starter,
    full,
    margin,
    modal,
    plain,
    position,
  },
};

