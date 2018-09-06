import express from 'express';
import mcache from 'memory-cache';
import fs from 'fs';
import url from 'url';
import nextjs from 'next';
import compression from 'compression';


const port = parseInt(process.env.PORT, 10) || 8444;
const dev = process.env.NODE_ENV !== 'production';
const app = nextjs({ dev });
const handle = app.getRequestHandler();

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

app.prepare()
  .then(() => {
    const server = express();

    if (!dev) {
      server.use(compression({ threshold: 0 }));
    }
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
