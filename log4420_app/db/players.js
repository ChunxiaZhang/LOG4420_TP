/*var mongooose = require('mongoose');
var mongoConfig = require('../config/mongoConfig');

mongooose.connect(mongoConfig.url);

var db = mongooose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(callback){
    console.log("yep!");
});
*/


var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://administrator:123456@ds045464.mongolab.com:45464/lonewolf';


exports.insertPlayer = function(req,res,callback) {
    MongoClient.connect(url, function (err, db){
        if (err) {
            console.log(err.message);
            return;
        }
        db.collection('players').insertOne( req.player,
            function(err, docs) {
                db.close();
                callback(docs);});
    });
};

exports.getAllPlayers = function(req,res,callback) {
    MongoClient.connect(url, function (err, db){
        if (err) return;
        db.collection('players').find().toArray(function(err,docs){
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


exports.updatePlayer = function(req, res, callback) {
    MongoClient.connect(url, function (err, db){
        if (err) return;
        db.collection('players').updateOne({_id: ObjectId(req.params.playerId)}, {
            $set:{"RANDOMNUM": req.body.RANDOMNUM, "combatSkill": req.body.combatSkill,
            "name":req.body.name,
            "goldCrowns": req.body.goldCrowns, "endurancePoints": req.body.endurancePoints,
            "disciplines": req.body.disciplines, "equipments": req.body.equipments}
        }, function(err){
            db.close();
            callback();
        });
    });
};

exports.removePlayer = function(req,res,callback){
    MongoClient.connect(url, function (err, db){
        db.collection('players').deleteOne({_id: ObjectId(req.params.playerId)}, function(){
            db.close();
            callback();});
    });
};
