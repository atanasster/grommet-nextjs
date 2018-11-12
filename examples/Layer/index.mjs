/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet/components/Layer/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { full } from './full';
import { margin } from './margin';
import { modal } from './modal';
import { plain } from './plain';
import { position } from './position';


export const Layer = {
  category: categories.layout,
  package: packages.grommet,
  doc: doc.doc({}).toJSON(),
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

