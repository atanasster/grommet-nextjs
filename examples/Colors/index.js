/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet-controls/components/Colors/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';
import { colors } from './colors.js';
import { columns } from './columns.js';
import { onSelect } from './onSelect.js';
import { size } from './size.js';
import { wrap } from './wrap.js';


export const Colors = {
  name: 'Colors',
  category: categories.controls,
  package: packages.grommetControls,
  doc: doc({}).toJSON(),
  examples: {
    _starter,
    colors,
    columns,
    onSelect,
    size,
    wrap,
  },
};

