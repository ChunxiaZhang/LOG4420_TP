var express = require('express');
var session = require('express-session');

var router = express.Router();
var Player = require("./../model/Player");
var pages = require("./../model/pages");
var conditionPages = require("./../model/conditionPages");
var CombatLogic = require("./../model/combatLogic");
var validation = require("./../middleware/validator");


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'The Lone Wolf gamebook' });
});

/* GET Game Creation page.*/
router.get('/creation', function(req, res) {
    res.render('creation', {title: "Create character"});

});

/* GET help.*/
router.get('/help', function(req, res, next) {
    res.render('help', {title: "Game rules"});
});

// create player object, and save it in session, turn to page1
router.post("/game/page1", validation.validateChoices(), function(req, res){
    var page = "./games/page1_1.jade";
    var player = new Player(req.body.discipline, req.body.equipment);
    player.endurancePoints += player.bonusEndurance(); //add endurance bonus
    player.combatSkill += player.bonusCombatSkill(); // add combat skill bonus

    req.session.player = player; // save player in session

    res.render(page, function(err, html) {
        res.render('page', { title: 1, htmlPage: html})
    });

});

/*
* a web server for sending player wish JSON
* */
router.get("/game/player", function(req, res){
    res.json(req.session.player);
});


/*
 * a web server for sending /page/:id with JSON, including every part of page and the information about combat,
 * and witch pages may access
 * */
router.get('/page/:id', function(req, res, next) {
    res.json(pages[req.params.id]);
});

// return to a part of pages
router.get('/page/:pageId/:partId', function(req, res, next) {
    // On récupère le paramètre de l'URL
    var pageId = req.params.pageId;
    var partId = req.params.partId;
    // On crée dynamiquement la page qu'on souhaite charger
    var page = "./games/page" + pageId + "_" + partId+ ".jade";

    // On veut d'abord convertir la page en HTML, une fois que la conversion
    // est faite, on va injecter le HTML généré vers le fichier page.jade

    res.render(page, function(err, html) {
        res.render('page', { title: pageId, htmlPage: html})
    });

});

/*
* a web server used to return the chosen page according the interval by JSON
* */
router.get('/choixAleatoire/:pageId', function(req, res) {
    var randomNum = Math.floor(Math.random()*(10 + 1));
    var i = 0;
    var page;
    var result;

    //find page according the pageId param
    for(i; i < conditionPages.length; i++) {
        if(conditionPages[i].id == req.params.pageId) {
            page = conditionPages[i];
            break;
        }
    }
    if(page) {
        result = {randomNum: randomNum, accessPage: page.decide(randomNum), interval: page.interval()};
    } else {
        result = {err: "No this page"};
    }

    res.json(result);
});


/*return a JSON contains random number, combat ratio, wolf damage
 and enemy damage according skills of lone wolf and enemy
 */
router.get('/combat/:wolfSkill/:enemySkill', function(req, res) {

    var result = new CombatLogic(req.params.wolfSkill, req.params.enemySkill);

    res.json(result);
});


module.exports = router;
