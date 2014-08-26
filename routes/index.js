var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Playground' });
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
