// eslint-disable-next-line no-unused-vars
import { Router } from 'next/router';
// eslint-disable-next-line no-unused-vars
import { RouteParams } from 'next-routes';

export type PreserveParams = string | string[];

export interface LinkInterface {
  path: string,
  route: string,
  preserveParams: PreserveParams,
  router: Router,
  params: RouteParams,
  href?: string,
}
