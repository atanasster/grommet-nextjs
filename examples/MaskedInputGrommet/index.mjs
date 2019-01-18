/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet/components/MaskedInput/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { phone } from './phone';
import { email } from './email';
// eslint-disable-next-line camelcase
import { ip_address } from './ip_address';


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

