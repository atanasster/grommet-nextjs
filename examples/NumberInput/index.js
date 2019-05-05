/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet-controls/components/NumberInput/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';
import { a11yIncrement } from './a11yIncrement.js';
import { addIcon } from './addIcon.js';
import { decimals } from './decimals.js';
import { disabled } from './disabled.js';
import { integers } from './integers.js';
import { max } from './max.js';
import { min } from './min.js';
import { prefix } from './prefix.js';
import { step } from './step.js';
import { suffix } from './suffix.js';
import { thousandsSeparatorSymbol } from './thousandsSeparatorSymbol.js';


export const NumberInput = {
  name: 'NumberInput',
  category: categories.input,
  package: packages.grommetControls,
  doc: doc.default({}).toJSON(),
  examples: {
    _starter,
    a11yIncrement,
    addIcon,
    decimals,
    disabled,
    integers,
    max,
    min,
    prefix,
    step,
    suffix,
    thousandsSeparatorSymbol,
  },
};

