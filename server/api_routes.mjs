/* eslint-disable no-param-reassign,import/extensions,import/no-unresolved,no-case-declarations */
import express from 'express';
import apicache from 'apicache';
import fs from 'fs';
import npath from 'path';
import fetch from 'isomorphic-unfetch';
import { examples } from '../examples/index';
import templateRoutes from './api_templates';

const router = express.Router();
const cache = apicache.middleware;

router.get('/examples/:package?/:component?', (req, res) => {
  if (req.params.component || req.params.package) {
    const item = examples
      .filter(e => (!req.params.package || e.package === req.params.package) &&
        (!req.params.component || e.name === req.params.component));
    res.json(item);
  } else {
    res.json(examples);
  }
});

router.get('/components/search/:search?/:limit?', (req, res) => {
  const { search = '', limit = 10 } = req.params;
  const searchLower = search.toLowerCase();
  const items = examples
    .filter(e => e.name.toLowerCase().match(searchLower))
    .slice(0, limit)
    .map(e => ({ name: e.name, package: e.package, category: e.category }));
  res.json(items);
});


router.get('/theme', (req, res) => {
  const theme = {};
  examples.forEach((example) => {
    if (example.themeDoc) {
      Object.keys(example.themeDoc).forEach((propName) => {
        const setThemeValue = (obj, keys, value) => {
          const lastIndex = keys.length - 1;
          for (let i = 0; i < lastIndex; i += 1) {
            const key = keys[i];
            if (!(key in obj)) {
              obj[key] = {};
            }
            obj = obj[key];
          }
          if (!(keys[lastIndex] in obj)) {
            obj[keys[lastIndex]] = [];
          }

          try {
            obj[keys[lastIndex]].push({ component: example.name, ...value });
          } catch (e) {
            console.log(propName, keys[lastIndex]);
          }
        };
        const keys = propName.split('.');
        setThemeValue(theme, keys, example.themeDoc[propName]);
      });
    }
  });
  res.json(theme);
});

router.get('/package/:package/:field?', cache('5 minutes'), (req, res) => {
  fetch(`https://registry.npmjs.org/${encodeURIComponent(req.params.package)}`)
    .then(r => r.json())
    .then((data) => {
      let json = { status: 'ok' };
      const { field } = req.params;
      switch (field) {
        case 'latest':
          const version = (data['dist-tags']) ? data['dist-tags'].latest : 'error';
          const time = (data.time && data.time[version]) ? data.time[version] : undefined;
          json = { ...json, version, time };
          break;
        default:
          json = { ...json, ...data };
          break;
      }
      res.json(json);
    });
});


router.get('/github/:owner/:repo/:path', cache('5 minutes'), (req, res) => {
  const { owner, repo, path } = req.params;
  fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`)
    .then(r => r.json())
    .catch(err => res.json({ markdown: err }))
    .then((content) => {
      fetch(content.download_url)
        .then(r => r.text())
        .then(markdown => res.json({ content, markdown }))
        .catch(err => res.json({ markdown: err }));
    });
});

router.get('/wiki/:owner/:repo/:path', cache('5 minutes'), (req, res) => {
  const { owner, repo, path } = req.params;
  fetch(`https://raw.githubusercontent.com/wiki/${owner}/${repo}/${path}.md`)
    .then(r => r.text())
    .then(markdown => res.json({ markdown }))
    .catch(err => res.json({ markdown: err }));
});

router.get('/file/:owner?/:repo?/:file', (req, res) => {
  const { file } = req.params;
  const fileName = npath.join(fs.realpathSync('.'), `./docs/${file}`);
  fs.readFile(fileName,
    (err, data) => {
      res.json({
        markdown: (err && JSON.stringify(err)) || (data && data.toString()),
        content: { html_url: `https://github.com/atanasster/grommet-nextjs/tree/master/docs/${file}` },
      });
    });
});


router.use('/templates', templateRoutes);
export default router;
