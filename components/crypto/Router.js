import { Router } from '../../utils/routes';
import { queryParams } from '../../utils/urlParams';

export default (item) => {
  const params = queryParams(Router, ['theme', 'currency']);
  Router.pushRoute(item.route, params);
};
