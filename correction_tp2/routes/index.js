var express = require('express');
var router = express.Router();
var session = require('express-session');

var Player = require("./../model/Player");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('accueil');
});

router.get('/creationJoueur', function(req, res, next) {
    res.render('creationJoueur');
});

router.get('/aide', function(req, res, next) {
    res.render('aide');
});

router.get('/jeu/:pageId', function(req, res, next) {
    var pageJeu = "page/" + req.params.pageId
    res.render(pageJeu, function(err, html) {
        res.render('page/pageJeu', {
            numeroPage: req.params.pageId,
            htmlPage: html
        });
    });
});

router.post("/jeu/:1", function(req, res){

    try {
        var player = new Player(req.body.discipline, req.body.equipment);
        var pageJeu = "page/" + 1;
        req.session.player = player;

        res.render(pageJeu, function(err, html) {
            res.render('page/pageJeu', {
                numeroPage: req.params.pageId,
                htmlPage: html
            });
        });

    } catch (err) {
        res.render('creationJoueur');
    }
});

router.get("/game/player", function(req, res){
    res.json(req.session.player);
});


module.exports = router;
