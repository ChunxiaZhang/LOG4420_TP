/**
 * Created by Zoe on 15-09-17.
 */
var express = require('express');
var router = express.Router();

/* GET users listing.*/
router.get('/', function(req, res, next) {
    res.render('help', {title: "Game rules"});
});

module.exports = router;
