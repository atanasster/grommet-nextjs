/* eslint-disable import/extensions,import/no-unresolved */
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { a11yIncrement } from './a11yIncrement';
import { addIcon } from './addIcon';
import { decimals } from './decimals';
import { disabled } from './disabled';
import { integers } from './integers';
import { max } from './max';
import { min } from './min';
import { prefix } from './prefix';
import { step } from './step';
import { suffix } from './suffix';
import { thousandsSeparatorSymbol } from './thousandsSeparatorSymbol';


export const NumberInput = {
  category: categories.input,
  package: packages.grommetControls,
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

