import PropTypes from 'prop-types';

import { withRouter } from 'next/router';
import { Anchor } from 'grommet';
import { Link } from '../../utils/routes';
import urlParams from '../../utils/urlParams';

class RoutedAnchor extends React.Component {
  render() {
    const {
      path, preserveParams, route, router, params, ...rest
    } = this.props;
    const href = urlParams(path, router, preserveParams);
    return (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <Link route={route || href} params={params}>
        <Anchor href={href} {...rest} />
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
