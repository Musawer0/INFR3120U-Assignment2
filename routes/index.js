var express = require('express');
var router = express.Router();

/* gets to Home page - renders views/index.ejs with page title */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* gets to About Me page - renders views/about.ejs with page title */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

/* gets to Projects page - renders views/projects.ejs with page title */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* gets to Contact Me page - renders views/contact.ejs with page title */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

module.exports = router;