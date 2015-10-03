/**
 * Created by Zoe on 15-09-17.
 */
/**
 * Created by Zoe on 15-09-17.
 */

var records = [{combatRound: 1, ratio: "-3", wolfDamage: "4", wolfEp: "16", enemyDamage: "5", enemyEP: "14", result: true},
                {combatRound: 2, ratio: "4", wolfDamage: "6",wolfEp: "19", enemyDamage: "4", enemyEP: "16", result: true}];
var combatRound;
var ratio;
var wolfDamage;
var wolfEp;
var enemyDamage;
var enemyEP;
var result;
var record = function(combat_round, ratio, wolf_damage, wolf_ep,  enemy_ep, enemy_damage, result) {
    this.combatRound = combat_round;
    this.ratio = ratio;
    this.wolf_damage = wolf_damage;
    this.wolfEp = wolf_ep;
    this.enemyDamage = enemy_damage;
    this.enemyEP = enemy_ep;
    this.result = result;
};

exports.addRecord = function(combat_round,ratio, wolf_damage, wolf_ep, enemy_damage, enemy_ep, result) {
    records.push(record((combat_round,ratio, wolf_damage, wolf_ep, enemy_damage, enemy_ep, result)));
}

exports.getRecords = function() {
    return records;
}