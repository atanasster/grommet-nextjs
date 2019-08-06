// eslint-disable-next-line no-unused-vars
import { RouteParams } from 'next-routes';
import { Router } from '../../server/routes';
import { queryParams } from '../nextjs/urlParams';


interface PushProps {
  route: string,
  params: RouteParams,
}
export default (item) => {
  const query: RouteParams = {
    ...queryParams(Router, ['theme']),
  };
  Router.pushRoute(item.route, {
    ...query, ...item.params,
  });
};
