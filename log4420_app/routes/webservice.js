/**
 * Created by Zoe on 2015-11-06.
 */
var express = require('express');
var router = express.Router();
var dbPlayers = require("./../db/players");
var dbRecords = require("./../db/records");


/*
 * récupère tous les joueurs qui se trouvent dans la base de données
 * */
router.get("/game/players", function(req, res){
    dbPlayers.getAllPlayers(req, res, function(docs){
        res.json(docs);
    });
});


/*
 récupère un joueur selon un ID passé en paramètre de l’URL
 * a web server for finding a player
 * */
router.get("/game/:playerId", function(req, res){
    dbPlayers.getPlayer(req, res, function(docs){
        res.json(docs);
    });

});

/*
 * un service web qui modifie le joueur existant dans la base de données
 * */
router.put("/game/update/:playerId", function(req, res){
    dbPlayers.updatePlayer(req, res, function(){
        res.json();
    });
});

/*
 * un service web qui supprime le joueur de la base de données
 * */
router.delete("/game/delete/:playerId", function(req, res){
    dbPlayers.removePlayer(req, res, function(){
        res.json();
    });
});


/*
 * un service web qui récupère l’avancement du joueur dans l’histoire
 * */
router.get('/game/record/:playerId', function(req, res) {
    dbRecords.getPlayerRecord(req, res, function(docs){
        res.json(docs);
    });
});

/*
 * un service web qui modi e l’avancement du joueur dans l’histoire.
 * */
router.put("/game/update/record/:playerId/:recordId", function(req, res){
    dbRecords.updateRecord(req, res, function(){
        res.json();
    });
});

/*
 * un service web qui supprime l’avancement du joueur dans l’histoire
 * */
router.delete("/game/delete/record/:playerId/:recordId", function(req, res){
    dbRecords.removeRecord(req, res, function(){
        res.json();
    });
});

/*
 * a web server for sending /page/:id with JSON, including every part of page and the information about combat,
 * and witch pages may access
 * */
router.get('/page/:id', function(req, res) {
    res.json(pages[req.params.id]);
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