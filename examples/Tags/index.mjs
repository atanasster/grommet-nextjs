/* eslint-disable import/extensions,import/no-unresolved */
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { a11yTitle } from './a11yTitle';
import { children } from './children';
import { direction } from './direction';
import { focusable } from './focusable';
import { icon } from './icon';
import { onClick } from './onClick';
import { placeholder } from './placeholder';
import { tagProps } from './tagProps';
import { value } from './value';

export const Tags = {
  category: categories.input,
  package: packages.grommetControls,
  examples: {
    _starter,
    a11yTitle,
    children,
    direction,
    focusable,
    icon,
    onClick,
    placeholder,
    tagProps,
    value,
  },
};

