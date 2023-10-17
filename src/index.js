const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev: dev });
const handle = app.getRequestHandler();

const router = require('./router');

app.prepare().then(() => {
  const server = express();

  server.use('/', router);

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  const port = parseInt(process.env.PORT ?? '3000', 10);
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
