const express = require('express');
const path = require('path');

const options = {
  root: path.join(__dirname, '/static'),
  headers: {
    'Content-Type': 'text/plain;charset=UTF-8',
  },
};


module.exports = () => {
  const router = express.Router();
  router.get('/robots.txt', (req, res) => (
    res.status(200).sendFile('robots.txt', options)
  ));
  return router;
};
