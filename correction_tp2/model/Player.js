//create player object
var disciplines = {
    CAMOUFLAGE: "camouflage",
    HUNTING: "hunting",
    SIXTHSENSE: "sixthsense",
    TRACKING: "tracking",
    HEALING: "healing",
    WEAPONSKILL: "weaponskill",
    MINDSHIELD: "mindshield",
    MINDBLIST: "mindblast",
    ANIMALKINSHIP: "animalkinship",
    MINDOVERMATTER: "mindovermatter"
};
var discplinesArray = [disciplines.CAMOUFLAGE, disciplines.HUNTING, disciplines.SIXTHSENSE, disciplines.TRACKING,
    disciplines.HEALING, disciplines.WEAPONSKILL, disciplines.MINDSHIELD, disciplines.MINDBLIST, disciplines.ANIMALKINSHIP, disciplines.MINDOVERMATTER];

var equipments = {SWORD:"sword", SHORTSWORD:"shortsword", PADDED:"padded", SPEAR:"spear",
    MACE:"mace", WARHAMMER:"warhammer", AXE:"axe", POTION:"potion", QUARTERSTAFF:"quarterstaff",
    RATIONS:"rations", BROADSWORD:"broadsword"};
var equipemntsArray = [equipments.SWORD, equipments.SHORTSWORD, equipments.PADDED, equipments.SPEAR, equipments.MACE,
    equipments.WARHAMMER, equipments.AXE, equipments.POTION, equipments.QUARTERSTAFF,
    equipments.RATIONS, equipments.BROADSWORD];


var Player = function (disciplinesChosen, equipmentsChosen) {

    console.log(disciplinesChosen);
    // check displines
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

    // check equipments
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

    this.RANDOMNUM = constant(Math.floor(Math.random()*(10 + 1)));
    this.name = "wolf";
    this.endurancePoints = 20 + this.RANDOMNUM;
    this.combatSkill = 10 + this.RANDOMNUM;
    this.goldCrowns = 10 + this.RANDOMNUM;

    this.disciplines = disciplinesChosen;
    this.equipments = equipmentsChosen;

    this.calculateEndurance = function(num) {
        this.endurancePoints = this.endurancePoints + num;
        if(this.endurancePoints <= 0) {
            throw "You endurance is zero, you are lost."
        }
        if(this.endurancePoints > (this.RANDOMNUM + 20)) {
            this.endurancePoints = this.RANDOMNUM + 20;
        }
        return this.endurancePoints;
    }

    this.calculateConbatSkill = function(num) {
        this.combatSkill = this.combatSkill + num;
        return this.combatSkill;
    }

    this.calculateGoldCrowns = function(num) {
        this.goldCrowns = this.goldCrowns + num;
        if(this.goldCrowns > 50) {
            this.goldCrowns = 50;
        }
        return this.goldCrowns;
    }
};

var constant = function(val) {
    return function() {
        return val;
    }
}

module.exports = Player;



