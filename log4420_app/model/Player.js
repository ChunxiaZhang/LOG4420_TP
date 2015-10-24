//Model of player

var objects = require("./../model/objects");
var disciplinesArray = objects.disciplinesArray;
var equipmentsArray = objects.equipmentsArray;
var weapons = objects.weapons;

//get constant, this function can make sure one attribute is unchangeable
var constant = function(val) {
    return function() {
        return val;
    }
}


var Player = function (disciplinesChosen, equipmentsChosen) {

    // confirm if disciplines are valid
    if(disciplinesChosen && disciplinesChosen.length === 5) {
        var i = 0;
        for(i; i < 5; i++) {
            if(disciplinesChosen.indexOf(disciplinesChosen[i]) < 0) {
                throw "Please do not change any element value!";
            }
        }
    } else {
        throw "Please choose 5 disciplines!";
    }

    // confirm if equipments are valide
    if(equipmentsChosen && equipmentsChosen.length === 2) {
        var i = 0;
        for(i; i < 2; i++) {
            if (disciplinesChosen.indexOf(disciplinesChosen[i]) < 0) {
                throw "Please do not change any element value!";
            }
        }
    } else {
        throw "Please choose 2 equipments!";
    }

    this.disciplines = disciplinesChosen;
    this.equipments = equipmentsChosen;

    this.RANDOMNUM = constant(Math.floor(Math.random()*(10 + 1)))(); //the initial random number should be unchangeable
    this.name = "wolf";
    this.combatSkill = 10 + this.RANDOMNUM;
    this.endurancePoints = 20 + this.RANDOMNUM;
    this.goldCrowns = 10 + this.RANDOMNUM;

};


// these functions can be used for every player object, so I put them in Player's prototype
Player.prototype = {
    calculateCombatSkill: function(num) {
        this.combatSkill = this.combatSkill + num;
        return this.combatSkill;
    },
    calculateEndurance: function(num) {
        this.endurancePoints = this.endurancePoints + num;
        if(this.endurancePoints <= 0) {
            throw "You endurance is zero, you are lost."
        }
        if(this.endurancePoints > (this.RANDOMNUM + 20)) {
            this.endurancePoints = this.RANDOMNUM + 20;
        }
        return this.endurancePoints;
    },
    calculateGoldCrowns: function(num) {
        this.goldCrowns = this.goldCrowns + num;
        if(this.goldCrowns > 50) {
            this.goldCrowns = 50;
        }
        return this.goldCrowns;
    },

    getWeaponsSkill: function() {
        var weaponsSkill = null;
        var i = 0;

        for (i; i < this.disciplines.length; i++) {
            if(disciplinesArray[5] == this.disciplines[i]) {
                var random = constant(Math.floor(Math.random()*(10 + 1)));
                weaponsSkill = weapons[random];
            }
        }
        return weaponsSkill;
    },

    bonusCombatSkill: function() {
        var bonus = 0;
        var i = 0;

        for(i; i < this.equipments.length; i++) {
            if(equipmentsArray[2] == this.equipments[i]) {
                bonus = 2;
                return bonus;
            }
        }
        return bonus;
    },

    bonusEndurance: function() {
        var bonus = 0;
        var i = 0;

        for(i; i < this.equipments.length; i++) {
            if(equipmentsArray[2] == this.equipments[i]) {
                bonus = 2;
                return bonus;
            }
        }
        return bonus;
    }
}



module.exports = Player;



