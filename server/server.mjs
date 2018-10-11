/* eslint-disable import/extensions,import/no-unresolved */
import express from 'express';
import mcache from 'memory-cache';
import fs from 'fs';
import url from 'url';
import nextjs from 'next';
import compression from 'compression';
import routes from './routes';
import * as examples from '../examples/index';

const port = parseInt(process.env.PORT, 10) || 8444;
const dev = process.env.NODE_ENV !== 'production';
const app = nextjs({ dev });

const cache = duration => (req, res, next) => {
  const key = `__express__${req.originalUrl}` || req.url;
  const cachedBody = mcache.get(key);
  if (cachedBody) {
    res.send(cachedBody);
    return;
  }
  res.sendResponse = res.send;
  res.send = (body) => {
    mcache.put(key, body, duration * 1000);
    res.sendResponse(body);
  };
  next();
};

const handle = routes.getRequestHandler(app);

app.prepare()
  .then(() => {
    const server = express();

    if (!dev) {
      server.use(compression({ threshold: 0 }));
      server.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next();
      });
    }
    server.get('/api/examples/:package?/:component?', (req, res) => {
      if (req.params.component) {
        res.json(examples[req.params.component]);
      } else if (req.params.package) {
        res.json(Object.keys(examples)
          .filter(e => examples[e].package === req.params.package)
          .reduce((acc, key) => ({ ...acc, [key]: examples[key] }), {}));
      } else {
        res.json(examples);
      }
    });
    server.get('*', cache(10), (req, res) => {
      const parsedUrl = url.parse(req.url, true);
      const { pathname } = parsedUrl;

      if (pathname === '/sw.js') {
        res.setHeader('content-type', 'text/javascript');
        fs.createReadStream('./public/serviceWorker.js').pipe(res);
      } else if (pathname === '/manifest.json') {
        res.setHeader('content-type', 'application/json');
        fs.createReadStream('./public/manifest.json').pipe(res);
      } else {
        handle(req, res, parsedUrl);
      }
    });

    server.listen(port, (err) => {
      if (err) {
        return console.error(err.message);
      }
      return console.log(`app started on ${port}`);
    });
  });
