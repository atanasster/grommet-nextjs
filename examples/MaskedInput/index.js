/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet-controls/components/MaskedInput/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';
import { a11yTitle } from './a11yTitle.js';
import { disabled } from './disabled.js';
import { dropContent } from './dropContent.js';
import { dropIcon } from './dropIcon.js';
import { focusIndicator } from './focusIndicator.js';
import { guide } from './guide.js';
import { keepCharPositions } from './keepCharPositions.js';
import { mask } from './mask.js';
import { name } from './name.js';
import { pipe } from './pipe.js';
import { placeholder } from './placeholder.js';
import { placeholderChar } from './placeholderChar.js';
import { plain } from './plain.js';
import { showMask } from './showMask.js';
import { widgets } from './widgets.js';


export const MaskedInput = {
  name: 'MaskedInput',
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
    guide,
    keepCharPositions,
    mask,
    name,
    pipe,
    placeholder,
    placeholderChar,
    plain,
    showMask,
    widgets,
  },
};

