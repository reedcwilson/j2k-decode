var express = require('express');
var router = express.Router();
var config = require(__dirname + '/../resume');


/* GET home page. */
router.get('/', function(req, res) {
  for (var key in config.resume) {
    console.log(key);
  }
  res.render('index', { title: 'Home', content: config });
});

/* GET projects page. */
router.get('/projects', function(req, res) {
  res.render('projects', { title: 'Projects' });
});

/* GET about page. */
router.get('/about', function(req, res) {
  res.render('about', { title: 'About' });
});

module.exports = router;
