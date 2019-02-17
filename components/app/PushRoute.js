import { Router } from '../../server/routes';
import { queryParams } from '../nextjs/urlParams';

export default (item) => {
  const query = { ...queryParams(Router, ['theme']) };
  Router.pushRoute(item.route, { ...query, ...item.params });
};
