import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import { Button } from 'grommet';
import Link from 'next/link';
import { queryParams } from './urlParams';

class RoutedButton extends React.Component {
  render() {
    const {
      path, preserveParams, router, params, ...rest
    } = this.props;
    const query = queryParams(router, preserveParams);
    return (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <Link
        href={{ pathname: path, query }}
        params={{ ...query, ...params }}
        passHref={true}
      >

        <Button {...rest} />
      </Link>
    );
  }
}

RoutedButton.defaultProps = {
  preserveParams: undefined,
  path: undefined,
  route: undefined,
};

RoutedButton.propTypes = {
  path: PropTypes.string,
  route: PropTypes.string,
  preserveParams: PropTypes.oneOfType([
    PropTypes.string, PropTypes.array,
  ]),
};
export default withRouter(RoutedButton);

