import React from 'react';
// eslint-disable-next-line no-unused-vars
import { withRouter, Router } from 'next/router';
import { Button } from 'grommet';
import { Link } from '../../server/routes';
import { queryParams } from './urlParams';
// eslint-disable-next-line no-unused-vars
import { LinkInterface } from './Link.interface';

class RoutedButton extends React.Component<LinkInterface> {
  render() {
    const { path, preserveParams, route, router, params, ...rest } = this.props;
    const query = queryParams(router, preserveParams);
    return (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <Link
        route={route}
        href={{
          pathname: path, query,
        }}
        params={{
          ...query, ...params,
        }}
        passHref={true}
      >

        <Button {...rest} />
      </Link>
    );
  }
}

export default withRouter(RoutedButton);

