var express = require('express');
var router = express.Router();
var md = require('marked');
var fs = require('fs');

var loadResume = function() {
  return require(__dirname + '/../resume');
};

/* GET resume */
router.get('/resume', function(req, res) {
  res.json(loadResume());
});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('resume', { title: 'Home', content: loadResume() });
});

/* GET projects page. */
router.get('/projects', function(req, res) {
  res.render('projects', { title: 'Projects' });
});

/* GET about page. */
router.get('/about', function(req, res) {
  fs.readFile(__dirname + '/../about.md', 'utf8', function(err, data){
    if (err) throw err;
    res.render('about', { title: 'About', md: md, markdown: data });
  });
});

/* GET inspiring people */
router.get('/inspiring-people', function(req, res) {
  res.render('inspiring-people', { title: 'Inspiring People' });
});

module.exports = router;
