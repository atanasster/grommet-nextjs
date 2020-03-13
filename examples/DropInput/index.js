/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet-controls/components/DropInput/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';
import { a11yTitle } from './a11yTitle.js';
import { disabled } from './disabled.js';
import { dropContent } from './dropContent.js';
import { dropIcon } from './dropIcon.js';
import { focusIndicator } from './focusIndicator.js';
import { name } from './name.js';
import { placeholder } from './placeholder.js';
import { plain } from './plain.js';
import { widgets } from './widgets.js';


export const DropInput = {
  name: 'DropInput',
  category: categories.input,
  package: packages.grommetControls,
  doc: doc({}).toJSON(),
  examples: {
    _starter,
    a11yTitle,
    disabled,
    dropContent,
    dropIcon,
    focusIndicator,
    name,
    placeholder,
    plain,
    widgets,
  },
};

