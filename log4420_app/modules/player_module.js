/**
 * Created by Zoe on 15-09-16.
 */

var randomNumber;
var combatSkill;
var endurancePoints;
var goldCrowns;

exports.setRandomNumber = function(e_randomNumber) {
    this.randomNuber = e_randomNumber;
}
exports.getRandomNumber = function() {
    this.randomNuber;
}
exports.setEndurancePoints = function(e_endurancePoints) {
    this.endurancePoints = e_endurancePoints;
}
exports.getEndurancePoints = function() {
    return this.endurancePoints;
}
exports.setCombatSkill = function(e_combatSkill) {
    this.combatSkill = e_combatSkill;
}
exports.getCombatSkill = function() {
    return this.combatSkill;
}

exports.setGoldCrowns = function(e_goldCrowns) {
    this.goldCrowns = e_goldCrowns;
}
exports.getGoldCrowns = function() {
    return this.goldCrowns;
}

/**
var Player = function() {
    this.hebilete;
    this.endurance;
    this.piecesOr;
    this.initalHabilete = function initalHabilete() {
        this.habilete = 10 + getRandomNum();
        console.log("habilete " + this.habilete);
    }
    this.initialEndurance = function initialEndurance() {
        this.endurance = 20 + getRandomNum();
        console.log("endurance " + this.endurance);
    }
    this.initialPiecesOr = function initialPiecesOr() {
        this.piecesOr = 10 + getRandomNum();
        console.log("piecesOr " + this.piecesOr);
    }
};

exports.setRatio = function(e_radio) {
    this.ratio = e_radio;
}

exports.getRatio = function() {
    return this.ratio;
}*/