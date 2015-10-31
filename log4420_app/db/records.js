var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://administrator:123456@ds045464.mongolab.com:45464/lonewolf';
var pages = require("./../model/pages");

exports.insertRecord = function(playerId,pageId,callback) {
    MongoClient.connect(url, function (err, db){
        if (err) return;
        if(!playerId.trim()) return;
        db.collection(playerId).insertOne(pages[pageId],
            function() {
                db.close();
                callback();});
    });
};
