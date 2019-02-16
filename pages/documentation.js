import React from 'react';
import { withRouter } from 'next/router';
import Doc from '../components/documentation/Doc';

export default withRouter(({ router: { query: { component, library = 'grommet-controls' } } }) => (
  <Doc
    name={component}
    library={library}
  />
));
