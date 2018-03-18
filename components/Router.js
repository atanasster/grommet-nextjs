import Router from 'next/router';
import urlParams from '../utils/urlParams';

export default (path) => {
  const href = urlParams(path, Router, 'theme');
  Router.push(href);
};
