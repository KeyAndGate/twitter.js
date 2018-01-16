const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/users/:name', (req, res) => {
    const user = {name: req.params.name};
    const userTweets = tweetBank.find(user);
    res.render('index', {tweets: userTweets} );
});

router.get('/tweets/:id', (req, res) => {
  const tweetId = {id: req.params.id};
  console.log('tweetId', tweetId);
  const tweet = tweetBank.find(tweetId);
  console.log('tweet', tweet);
  res.render('index', {tweets: tweet});
});
module.exports = router;
