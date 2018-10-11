/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet-controls/components/Colors/doc';
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
  doc: doc.default({}).toJSON(),
  examples: {
    _starter,
    colors,
    columns,
    onSelect,
    size,
    wrap,
  },
};

