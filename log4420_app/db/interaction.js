var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://administrator:123456@ds045464.mongolab.com:45464/lonewolf';


// mongodb
exports.connectDb = function(req,res,callback) {
    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);
        console.log("Connected correctly to mongodb server.");
        db.close();
    });
};

exports.insertPlayer = function(req,res,callback) {
    MongoClient.connect(url, function (err, db){
        if (err) return;
        db.collection('players').insertOne({
                initNum: req.player.RANDOMNUM,
                combatSkill: req.player.combatSkill,
                endurancePoints: req.player.endurancePoints,
                goldCrowns: req.player.goldCrowns,
                disciplines: req.player.disciplines,
                equipments: req.player.equipments
            },
            function() {
                db.close();
                callback();});
    });
};

exports.getAllPlayers = function(req,res,callback) {
    MongoClient.connect(url, function (err, db){
        if (err) return;
        db.collection('players').find().toArray(function(err,docs){
            console.log(docs);
            db.close();
            callback(docs);
        });
    });
};

exports.getPlayer = function(req,res,callback) {
    MongoClient.connect(url, function (err, db){
        if (err) return;
        db.collection('players').find({_id : ObjectId(req.params.playerId)}).toArray(function(err,docs){
            console.log(docs);
            db.close();
            callback(docs);
        });
    });
};

