var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { legal_info: false });
});
router.get('/about', function (req, res, next) {
  res.render('about', { legal_info: false });
});
router.get('/partners', function (req, res, next) {
  res.render('partners', { legal_info: false });
});
router.get('/funding', function (req, res, next) {
  res.render('funding', { legal_info: true });
});
router.get('/contact', function (req, res, next) {
  res.render('contact', { legal_info: true });
});

module.exports = router;
