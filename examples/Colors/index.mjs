/* eslint-disable import/extensions,import/no-unresolved */
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { colors } from './colors';
import { columns } from './columns';
import { onSelect } from './onSelect';
import { size } from './size';
import { wrap } from './wrap';

export const Colors = {
  category: categories.controls,
  package: packages.grommetControls,
  examples: {
    _starter,
    colors,
    columns,
    onSelect,
    size,
    wrap,
  },
};

