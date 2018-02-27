import PropTypes from 'prop-types';
import Link from 'next/link';
import { withRouter } from 'next/router';
import { Anchor } from 'grommet';
import urlParams from '../../utils/urlParams';

class RoutedAnchor extends React.Component {
  render() {
    const {
      path, preserveParams, router, ...rest
    } = this.props;
    const href = urlParams(path, router, preserveParams);
    return (
      <Link href={href}>
        <Anchor href={href} {...rest} />
      </Link>
    );
  }
}

RoutedAnchor.defaultProps = {
  preserveParams: undefined,
};

RoutedAnchor.propTypes = {
  path: PropTypes.string.isRequired,
  preserveParams: PropTypes.oneOfType([
    PropTypes.string, PropTypes.array,
  ]),
};
export default withRouter(RoutedAnchor);
