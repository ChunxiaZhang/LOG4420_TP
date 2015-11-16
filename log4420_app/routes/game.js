/**
 * Created by Zoe on 2015-11-06.
 */
var express = require('express');
var router = express.Router();
var session = require('express-session');
var dbRecords = require("./../db/records");

// return to a part of pages
router.get('/:pageId/:partId', function(req, res, next) {
    var pageId = req.params.pageId;
    var partId = req.params.partId;

    var page = "./games/page" + pageId + "_" + partId+ ".jade";

    res.render(page, function(err, html) {
        //insert record to db
        dbRecords.insertRecord(session.playerId.toString(), pageId, function(){
            console.log("insert record");
        });

        res.render('page', { title: pageId, htmlPage: html})
    });

});

/*
 *  Continue game
 * */
router.get('/game/continue/:playerId', function(req, res) {
    dbRecords.getPlayerRecord(req, res, function(docs){
        console.log(docs[docs.length-1]);
        var lastPageId = docs[docs.length-1].id;
        console.log(lastPageId);

        var page = "./games/page" + lastPageId + "_" + 1+ ".jade";

        res.render(page, function(err, html) {

            res.render('page', { title: lastPageId, htmlPage: html})
        });

    });

});

module.exports = router;