module.exports = function(io) {
  const express = require('express');
  const router = express.Router();
  const tweetBank = require('../tweetBank');

  const bodyParser = require('body-parser');

  const urlEncodedParser = bodyParser.urlencoded({ extended: false });

  router.get('/', function (req, res) {
    let tweets = tweetBank.list();
      res.render( 'index', { tweets: tweets, showForm: true } );
  });

  router.post('/tweets', urlEncodedParser, function (req, res) {
      if(!req.body) return res.sendStatus(400);
      tweetBank.add(req.body.name, req.body.text);
      io.sockets.emit('newTweet', {text: 'dummy text'});
      // res.redirect('/');
  });

  router.get('/users/:name', (req, res) => {
      const user = {name: req.params.name};
      const userTweets = tweetBank.find(user);
      res.render('index', {tweets: userTweets, showForm: true, pageName: user.name} );
  });

  router.get('/tweets/:id', (req, res) => {
    const tweetId = {id: req.params.id};
    const tweet = tweetBank.find(tweetId);
    res.render('index', {tweets: tweet});
  });

  return router;
}
