import { Router } from "next/router";
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
