import React from 'react';
import { withRouter } from 'next/router';
import { Anchor } from 'grommet';
import { Link } from '../../server/routes';
import { queryParams } from './urlParams';
// eslint-disable-next-line no-unused-vars
import { LinkInterface } from './Link.interface';

class RoutedAnchor extends React.Component<LinkInterface> {
  render() {
    const { path, preserveParams, route, router, params, ...rest } = this.props;
    const query = queryParams(router, preserveParams);
    return (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <Link
        route={route}
        href={{
          pathname: path || rest.href, query,
        }}
        params={{
          ...query, ...params,
        }}
        passHref={true}
      >
        <Anchor {...rest} />
      </Link>
    );
  }
}

export default withRouter(RoutedAnchor);
