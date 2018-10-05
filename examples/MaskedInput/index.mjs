/* eslint-disable import/extensions,import/no-unresolved */
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { a11yTitle } from './a11yTitle';
import { disabled } from './disabled';
import { dropContent } from './dropContent';
import { dropIcon } from './dropIcon';
import { focusIndicator } from './focusIndicator';
import { guide } from './guide';
import { keepCharPositions } from './keepCharPositions';
import { mask } from './mask';
import { name } from './name';
import { pipe } from './pipe';
import { placeholder } from './placeholder';
import { placeholderChar } from './placeholderChar';
import { plain } from './plain';
import { showMask } from './showMask';
import { widgets } from './widgets';


export const MaskedInput = {
  category: categories.input,
  package: packages.grommetControls,
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

