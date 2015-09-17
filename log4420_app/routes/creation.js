
var express = require('express');
var router = express.Router();

var initial = require("./initial_module");
var wolf = require("./player_module");
wolf.setCombatSkill(initial.get10_20RandomNum());
wolf.setEndurancePoints(initial.get20_30RandomNum());
wolf.setGoldCrowns(initial.get20_30RandomNum());
console.log(wolf.getCombatSkill());

/* GET Game Creation page.*/
router.get('/', function(req, res) {
    res.render('creation', {title: "my games", wolf:wolf});
});

module.exports = router;