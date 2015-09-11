var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express, hi' });
});

/* GET Game Welcome page. */
router.get('/welcome', function(req, res) {
           res.render('welcome', { title: 'Hello, Game!' });
           });

/* GET Game Creation page. */
router.get('/creation', function(req, res) {
           res.render('creation', { title: 'Creation Game!' });
           });

module.exports = router;
