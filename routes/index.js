var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/j2k', function(req, res) {
  res.render('j2k', { title: 'J2K Decoding' });
});

module.exports = router;
