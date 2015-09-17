/**
 * Created by Zoe on 15-09-17.
 */
var express = require('express');
var router = express.Router();

var wolf = require("./player_module");
var equipments_mudule = require("./equipments_module");
var equipments = equipments_mudule.getEquipments();

var records_module = require("./records_module");
var records = records_module.getRecords();

/* GET users listing.*/
router.get('/', function(req, res, next) {
    res.render('page1', {title: "Page 1", wolf:wolf, equipments:equipments, records:records});
});

module.exports = router;
