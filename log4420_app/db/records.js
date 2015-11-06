var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://administrator:123456@ds045464.mongolab.com:45464/lonewolf';
var pages = require("./../model/pages");

exports.insertRecord = function(playerId,pageId,callback) {
    MongoClient.connect(url, function (err, db){
        if (err) return;
        if(!playerId.trim()) return;
        console.log(pages[pageId]);
        db.collection(playerId).insertOne(pages[pageId],
            function() {
                db.close();
                callback();});
    });
};

exports.getPlayerRecord = function(req,res,callback) {
    MongoClient.connect(url, function (err, db){
        if (err) return;
        db.collection(req.params.playerId).find().toArray(function(err,docs){
            db.close();
            callback(docs);
        });
    });
};


exports.updateRecord = function(req, res, callback) {
    MongoClient.connect(url, function (err, db){
        if (err) return;
        db.collection(req.params.playerId).updateOne({_id: ObjectId(req.params.recordId)}, {
            $set:{"id":req.body.id}
        }, function(err){
            db.close();
            callback();
        });
    });
};

exports.removeRecord = function(req,res,callback){
    MongoClient.connect(url, function (err, db){
        db.collection(req.params.playerId).deleteOne({_id: ObjectId(req.params.recordId)}, function(){
            db.close();
            callback();});
    });
};
