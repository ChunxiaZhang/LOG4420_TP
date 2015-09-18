/**
 * Created by Zoe on 15-09-17.
 */
/**
 * Created by Zoe on 15-09-17.
 */

var records = [{wolfEp: "16", ratio: "-3", enemyEP: "14", result: true},
                {wolfEp: "19", ratio: "4", enemyEP: "16", result: true}];
var wolfEp;
var ratio;
var enemyEP;
var result;
var record = function(wolf_ep,ratio, enemy_ep, result) {
    this.wolfEp = wolf_ep;
    this.ratio = ratio;
    this.enemyEP = enemy_ep;
    this.result = result;
};

exports.addRecord = function(wolf_ep,ratio, enemy_ep, result) {
    records.push(record((wolf_ep,ratio, enemy_ep, result)));
}

exports.getRecords = function() {
    return records;
}