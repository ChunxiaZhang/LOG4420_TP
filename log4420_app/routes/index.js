var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'The Lone Wolf gamebook' });
});

/* GET Game Creation page.*/
router.get('/creation', function(req, res) {
    res.render('creation', {title: "Create character"});

});

/* GET help.*/
router.get('/help', function(req, res) {
    res.render('help', {title: "Game rules"});
});



module.exports = router;
