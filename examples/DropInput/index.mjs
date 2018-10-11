/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet-controls/components/DropInput/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { a11yTitle } from './a11yTitle';
import { disabled } from './disabled';
import { dropContent } from './dropContent';
import { dropIcon } from './dropIcon';
import { focusIndicator } from './focusIndicator';
import { name } from './name';
import { placeholder } from './placeholder';
import { plain } from './plain';
import { widgets } from './widgets';


export const DropInput = {
  category: categories.input,
  package: packages.grommetControls,
  doc: doc.default({}).toJSON(),
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

