var express = require('express');
var router = express.Router();

var initial = require("./initial_module");
var wolf = require("./player_module");
wolf.setCombatSkill(initial.get10_20RandomNum());
wolf.setEndurancePoints(initial.get20_30RandomNum());
wolf.setGoldCrowns(initial.get20_30RandomNum());
console.log(wolf.getCombatSkill());

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Welcome Lone Wolf Game' });
});

/* GET Game Creation page.*/
router.get('/creation', function(req, res) {
    var pageData = {title: "Create Game", wolf:wolf};
    res.render('creation', { pagerData: pageData});
});


module.exports = router;
