import { Router } from '../../server/routes';
import { queryParams } from '../nextjs/urlParams';
import { RouteParams } from "next-routes";

interface PushProps {
  route: string,
  params: RouteParams,
}
export default (item) => {
  const query: RouteParams = { ...queryParams(Router, ['theme']) };
  Router.pushRoute(item.route, { ...query, ...item.params });
};
