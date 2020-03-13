/* eslint-disable import/extensions,import/no-unresolved */
import { doc } from 'grommet/components/Layer/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';
import { full } from './full.js';
import { margin } from './margin.js';
import { modal } from './modal.js';
import { plain } from './plain.js';
import { position } from './position.js';


export const Layer = {
  name: 'Layer',
  category: categories.layout,
  package: packages.grommet,
  doc: doc({}).toJSON(),
  themeDoc: doc.themeDoc,
  examples: {
    _starter,
    full,
    margin,
    modal,
    plain,
    position,
  },
};

