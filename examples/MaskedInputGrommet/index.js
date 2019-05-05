/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet/components/MaskedInput/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';
import { phone } from './phone.js';
import { email } from './email.js';
// eslint-disable-next-line camelcase
import { ip_address } from './ip_address.js';


export const MaskedInputGrommet = {
  name: 'MaskedInput',
  category: categories.input,
  package: packages.grommet,
  doc: doc.doc({}).toJSON(),
  examples: {
    _starter,
    email,
    ip_address,
    phone,
  },
};

