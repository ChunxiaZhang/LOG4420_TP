var express = require('express');
var session = require('express-session');

var router = express.Router();
var Player = require("./../model/Player");
var pages = require("./../model/pages");
var conditionPages = require("./../model/conditionPages");
var CombatLogic = require("./../model/combatLogic");

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
router.post("/game/page1", function(req, res){

    try {
        var player = new Player(req.body.discipline, req.body.equipment);
        var v = 1;
        var page = "./games/page" + v + ".jade";

        req.session.player = player; // save player in session
        res.render(page, function(err, html) {
            res.render('page', { title: v, htmlPage: html})
        });

    } catch (err) {
        res.render('creation', {title: "Create character", errmsg:err});
    }
});

//send player with JSON
router.get("/game/player", function(req, res){
    res.json(req.session.player);
});

// send /page/:id with JSON
router.get('/page/:id', function(req, res, next) {
    res.json(pages[req.params.id]);
});

// return to the 1 part of pages
router.get('/page/:id/1', function(req, res, next) {
    // On récupère le paramètre de l'URL
    var id = req.params.id;

    // On crée dynamiquement la page qu'on souhaite charger
    var page = "./games/page" + id + "_1.jade";

    // On veut d'abord convertir la page en HTML, une fois que la conversion
    // est faite, on va injecter le HTML généré vers le fichier page.jade

    res.render(page, function(err, html) {
        res.render('page', { title: id, htmlPage: html})
    });

});

// return to the 2 part of pages
router.get('/page/:id/2', function(req, res, next) {

    var id = req.params.id;
    var page = "./games/page" + id + "_2.jade";

    res.render(page, function(err, html) {
        res.render('page', { htmlPage: html})
    });
});

// send the choose according the interval with JSON
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
