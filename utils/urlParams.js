import URLSearchParams from 'url-search-params';

export default (newPath, router, preserveParams) => {
  let href = newPath;
  if (preserveParams) {
    const query = typeof preserveParams === 'string' ? [preserveParams] : preserveParams;
    const params = new URLSearchParams(router.asPath.split('?')[1]);
    query.forEach((p) => {
      if (router.query[p] !== undefined) { params.set(p, router.query[p]); }
    });
    if (Array.from(params.keys()).length !== 0) {
      href = `${newPath}?${params.toString()}`;
    }
  }
  return href;
};
