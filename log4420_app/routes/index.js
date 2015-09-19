var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'The Lone Wolf gamebook' });
});

var initial = require("./../modules/initial_module");
var wolf = require("./../modules/player_module");
var equipments_module = require("./../modules/equipments_module");
var disciplines_module = require("./../modules/disciplines_module");
var records_module = require("./../modules/records_module");
wolf.setCombatSkill(initial.get10_20RandomNum());
wolf.setEndurancePoints(initial.get20_30RandomNum());
wolf.setGoldCrowns(initial.get20_30RandomNum());
console.log(wolf.getCombatSkill());

var equipments = equipments_module.getEquipments();
var records = records_module.getRecords();
var disciplines = disciplines_module.getDisciplines();

/* GET Game Creation page.*/
router.get('/creation', function(req, res) {
    res.render('creation', {title: "Create character", wolf:wolf});
});

/* GET help.*/
router.get('/help', function(req, res, next) {
    res.render('help', {title: "Game rules"});
});


router.get('/:value', function(req, res, next) {
    // On récupère le paramètre de l'URL
    var v = req.params.value


    // On crée dynamiquement la page qu'on souhaite charger
    var page = "./games/page" + v + ".jade"

    // On veut d'abord convertir la page en HTML, une fois que la conversion
    // est faite, on va injecter le HTML généré vers le fichier page.jade
    res.render(page, function(err, html) {
        res.render('page', { title: v, htmlPage: html , wolf:wolf, equipments:equipments, records:records, disciplines:disciplines})

    });
});


module.exports = router;
