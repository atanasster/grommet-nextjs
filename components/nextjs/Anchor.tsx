import React from 'react';
import { withRouter, Router } from 'next/router';
import { Anchor as GrommetAnchor } from 'grommet';
import urlParams from './urlParams';
import { PreserveParams } from './Link.interface';

interface AnchorProps {
  path: string,
  preserveParams: PreserveParams,
  router: Router,
}

const Anchor: React.FC<AnchorProps> = ({ path, preserveParams, router, ...rest }) => {
  const href: string = urlParams(path, router, preserveParams);
  return (
    <GrommetAnchor href={href} {...rest} />
  );
};

export default withRouter(Anchor);
