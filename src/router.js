const express = require('express');

// const UserController = require('./server').UserController;
import { UserController } from '../server';

const router = express.Router();

router.get('/a', (req, res) => res.send('a'));

router.get('/b', (req, res) => res.send('b'));

router.post('/api/getuser', (req, res) => {
  console.log('appppp');
  // return res.json({ ret: 0, msg: 'success' });
  return UserController.getUser(req, res);
});

router.get('/posts/:id', (req, res) => {
  console.log(req.query);
  return res.send('posts');
});

module.exports = router;
