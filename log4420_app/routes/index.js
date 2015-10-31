var express = require('express');
var session = require('express-session');


var router = express.Router();
var Player = require("./../model/Player");
var pages = require("./../model/pages");
var conditionPages = require("./../model/conditionPages");
var CombatLogic = require("./../model/combatLogic");
var validation = require("./../middleware/validator");

var dbPlayers = require("./../db/players");
var dbRecords = require("./../db/records");

var currentPlayerId = "";

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

// create player object, and save it in session, turn to page1
router.post("/game/page1", validation.validateChoices(), function(req, res){
    var page = "./games/page1_1.jade";
    var player = new Player(req.body.discipline, req.body.equipment);
    player.endurancePoints += player.bonusEndurance(); //add endurance bonus
    player.combatSkill += player.bonusCombatSkill(); // add combat skill bonus

    req.player = player;


    dbPlayers.insertPlayer(req, res, function(docs){

        currentPlayerId = docs["ops"][0]["_id"];
        
        //insert record to db
        dbRecords.insertRecord(currentPlayerId.toString(), 1, function(){

        });
    });


    res.render(page, function(err, html) {

        res.render('page', { title: 1, htmlPage: html})
    });

});

router.get("/game/players", function(req, res){
    dbPlayers.getAllPlayers(req, res, function(docs){
        res.json(docs);
    });
});

/*
* a web server for finding a player
* */
router.get("/game/:playerId", function(req, res){
    dbPlayers.getPlayer(req, res, function(docs){
        res.json(docs);
    });

});

router.put("/game/update/:playerId", function(req, res){
    dbPlayers.updatePlayer(req, res, function(){
        res.json();
    });
});

router.delete("/game/delete/:playerId", function(req, res){
    dbPlayers.removePlayer(req, res, function(){
        res.json();
    });
});

/*
*  Continue game
* */
router.get('/game/continue', function(req, res) {
   /* dbRecords.(req, res, function(docs){
        res.json(docs);
    });
    res.json(pages[req.params.id]);*/

});

/*
 * a web server for sending /page/:id with JSON, including every part of page and the information about combat,
 * and witch pages may access
 * */
router.get('/page/:id', function(req, res) {
    res.json(pages[req.params.id]);
});

// return to a part of pages
router.get('/page/:pageId/:partId', function(req, res, next) {
    var pageId = req.params.pageId;
    var partId = req.params.partId;

    var page = "./games/page" + pageId + "_" + partId+ ".jade";

    res.render(page, function(err, html) {
        //insert record to db
        dbRecords.insertRecord(currentPlayerId.toString(), pageId, function(){

        });

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
