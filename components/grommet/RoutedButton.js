import PropTypes from 'prop-types';
import Link from 'next/link';
import { withRouter } from 'next/router';
import { Button } from 'grommet';
import urlParams from '../../utils/urlParams';

class RoutedButton extends React.Component {
  render() {
    const {
      path, preserveParams, router, as, ...rest
    } = this.props;
    const href = urlParams(path, router, preserveParams);
    return (
      <Link href={href} as={as}>
        <Button href={href} {...rest} />
      </Link>
    );
  }
}

RoutedButton.defaultProps = {
  preserveParams: undefined,
};

RoutedButton.propTypes = {
  path: PropTypes.string.isRequired,
  preserveParams: PropTypes.oneOfType([
    PropTypes.string, PropTypes.array,
  ]),
};
export default withRouter(RoutedButton);
