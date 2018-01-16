const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/users/:name', (req, res) => {
    const user = {name: req.params.name};
    const userTweet = tweetBank.find(user);
    res.render(userTweet);
});

module.exports = router;
