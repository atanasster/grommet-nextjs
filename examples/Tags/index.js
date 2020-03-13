/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet-controls/components/Tags/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';
import { a11yTitle } from './a11yTitle.js';
import { children } from './children.js';
import { direction } from './direction.js';
import { focusable } from './focusable.js';
import { icon } from './icon.js';
import { onClick } from './onClick.js';
import { placeholder } from './placeholder.js';
import { tagProps } from './tagProps.js';
import { value } from './value.js';


export const Tags = {
  name: 'Tags',
  category: categories.input,
  package: packages.grommetControls,
  doc: doc({}).toJSON(),
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

