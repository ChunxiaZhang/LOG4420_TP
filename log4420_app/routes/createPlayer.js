/**
 * Created by Zoe on 2015-11-06.
 */
var express = require('express');
var router = express.Router();
var session = require('express-session');
var Player = require("./../model/Player");
var validation = require("./../middleware/validator");
var dbPlayers = require("./../db/players");
var dbRecords = require("./../db/records");

// create player object, and save it to DB, turn to page1
router.post("/game/page1", validation.validateChoices(), function(req, res) {
    console.log(req.body);
    var page = "./games/page1_1.jade";
    var player = new Player(req.body.discipline, req.body.equipment);
    player.endurancePoints += player.bonusEndurance(); //add endurance bonus
    player.combatSkill += player.bonusCombatSkill(); // add combat skill bonus

    if (req.body.playerName) {

        player.name = req.body.playerName;
    }

    req.player = player;
    console.log(req.player);

    //Complétez la requête POST envoyée au serveur par la page de création du joueur
    //en ajoutant le joueur dans la base de données.
    dbPlayers.insertPlayer(req, res, function(docs){
        session.playerId = docs["ops"][0]["_id"];
        console.log("sesson" + session.playerId);

        //Dans la requête POST de la page de création du joueur, initialisez l’avancement du joueur dans l’histoire.
        //insert record to db
        dbRecords.insertRecord(session.playerId.toString(), 1, function(){
            console.log("insert play record");
        });
    });


    res.render(page, function(err, html) {
        console.log("render to page 1");
        res.render('page', { title: 1, htmlPage: html})
    });

});

module.exports = router;