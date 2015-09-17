var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Welcome Lone Wolf Game' });
});




/* GET page1. */
router.get('/games/page1', function(req, res, next) {
    res.render('/games/page1', { title: 'Page 1' });
});

module.exports = router;
