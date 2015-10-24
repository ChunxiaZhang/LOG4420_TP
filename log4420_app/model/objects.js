/*
* create discipline, equipment
* create discipline array, equipment array and weapon array
* */

var disciplines = {
    CAMOUFLAGE: "camouflage",
    HUNTING: "hunting",
    SIXTHSENSE: "sixthSense",
    TRACKING: "tracking",
    HEALING: "healing",
    WEAPONSKILL: "weaponskill",
    MINDSHIELD: "mindshield",
    MINDBLIST: "mindblast",
    ANIMALKINSHIP: "animalkinship",
    MINDOVERMATTER: "mindOverMatter"
};
module.exports.disciplinesArray = [disciplines.CAMOUFLAGE, disciplines.HUNTING, disciplines.SIXTHSENSE, disciplines.TRACKING,
    disciplines.HEALING, disciplines.WEAPONSKILL, disciplines.MINDSHIELD, disciplines.MINDBLIST, disciplines.ANIMALKINSHIP, disciplines.MINDOVERMATTER];

var equipments = {
    SWORD:"sword",
    SHORTSWORD:"shortSword",
    LEATHERWAISTCOAT:"paddedLeatherWaistcoat",
    SPEAR:"spear",
    MACE:"mace",
    WARHAMMER:"warhammer",
    AXE:"axe",
    POTION:"potion",
    QUARTERSTAFF:"quarterstaff",
    SPECIALRATIONS:"specialRations",
    BROADSWORD:"broadsword"};

module.exports.equipmentsArray = [equipments.SWORD, equipments.SHORTSWORD, equipments.LEATHERWAISTCOAT, equipments.SPEAR, equipments.MACE,
    equipments.WARHAMMER, equipments.AXE, equipments.POTION, equipments.QUARTERSTAFF,
    equipments.SPECIALRATIONS, equipments.BROADSWORD];

module.exports.weapons = ["dagger", "spear", "mace", "shortSword", "warhammer", "sword", "axe", "sword", "quarterstaff", "broadsword"];


