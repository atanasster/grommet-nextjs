import PropTypes from 'prop-types';

import { withRouter } from 'next/router';
import { Anchor } from 'grommet';
import Link from 'next/link';
import { queryParams } from './urlParams';

class RoutedAnchor extends React.Component {
  render() {
    const {
      path, preserveParams, router, params, ...rest
    } = this.props;
    const query = queryParams(router, preserveParams);
    return (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <Link
        href={{ pathname: path, query }}
        passHref={true}
      >
        <Anchor {...rest} />
      </Link>
    );
  }
}

RoutedAnchor.defaultProps = {
  preserveParams: undefined,
  path: undefined,
  route: undefined,
};

RoutedAnchor.propTypes = {
  path: PropTypes.string,
  route: PropTypes.string,
  preserveParams: PropTypes.oneOfType([
    PropTypes.string, PropTypes.array,
  ]),
};
export default withRouter(RoutedAnchor);
