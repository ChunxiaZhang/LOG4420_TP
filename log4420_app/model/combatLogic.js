
/*this is combat results table, is a 3 dimensional array
* the first is array of Combat Radio,index is from 0 to 12, correspondent the column of  Combat Ratio
* the second is array of Random Number, index is from 0 to 9, correspondent the row of Random Number
* the third is LW(Lone Wolf's damage) and E(Enemy's damage)
* 30 means K(Automatically killed), because endurance can't more than 30, so the endurance subtract 30 will small than 0, than means death
* */
var combatResultsTable = [
    [[6, 0], [0, 30], [0, 30], [0, 8], [0, 8], [1, 7], [2, 6], [3, 5], [4, 4], [5, 3]],
    [[7, 0], [0, 30], [0, 8], [0, 7], [1, 7], [2, 6], [3, 6], [4, 5], [5, 4], [6, 3]],
    [[8, 0], [0, 8], [0, 7], [1, 6], [2, 6], [3, 5], [4, 5], [5, 4], [6, 3], [7, 2]],
    [[9, 0], [0, 6], [1, 6], [2, 5], [3, 5], [4, 4], [5, 4], [6, 3], [7, 2], [8, 0]],
    [[10, 0], [1, 6], [2, 5], [3, 5], [4, 4], [5, 4], [6, 3], [7, 2], [8, 1], [9, 0]],
    [[11, 0], [2, 5], [3, 5], [4, 4], [5, 4], [6, 3], [7, 2], [8, 2], [9, 1], [10, 0]],
    [[12, 0], [3, 5], [4, 4], [5, 4], [6, 3], [7, 2], [8, 2], [9, 1], [10, 0], [11, 0]],
    [[14, 0], [4, 5], [5, 4], [6, 3], [7, 3], [8, 2], [9, 2], [10, 1], [11, 0], [12, 0]],
    [[16, 0], [5, 4], [6, 3], [7, 3], [8, 2], [9, 2], [10, 2], [11, 1], [12, 0], [14, 0]],
    [[18, 0], [6, 4], [7, 3], [8, 3], [9, 2], [10, 2], [11, 1], [12, 0], [14, 0], [16, 0]],
    [[30, 0], [7, 4], [8, 3], [9, 2], [10, 2], [11, 2], [12, 1], [14, 0], [16, 0], [18, 0]],
    [[30, 0], [8, 3], [9, 3], [10, 2], [11, 2], [12, 2], [14, 1], [16, 0], [18, 0], [30, 0]],
    [[30, 0], [9, 3], [10, 2], [11, 2], [12, 2], [14, 1], [16, 1], [18, 0], [30, 0], [30, 0]]
];

//correspondent the Combat Ratio to the index of the combatResultsTable
var indexCombatRatio = function(ratio) {
    var index;
    if(ratio <= -11) {
        index = 0;
    } else if(ratio >= 11) {
        index = 12;
    } else {
        switch (ratio) {
            case -10:
            case -9:
                index = 1;
                break;
            case -8:
            case -7:
                index = 2;
                break;
            case -6:
            case -5:
                index = 3;
                break;
            case -4:
            case -3:
                index = 4;
                break;
            case -2:
            case -1:
                index = 5;
                break;
            case 0:
                index = 6;
                break;
            case 1:
            case 2:
                index = 7;
                break;
            case 3:
            case 4:
                index = 8;
                break;
            case 5:
            case 6:
                index = 9;
                break;
            case 7:
            case 8:
                index = 10;
                break;
            case 9:
            case 10:
                index = 11;
                break;
            default :
                break;
        }
    }

    return index;

};

//get combat results
var CombatLogic = function(wolfCombatSkill, enemyComabtSkill) {
    this.randomNum = Math.floor(Math.random()*(10 + 1));

    //Subtract the COMBAT SKILL of your enemy from this total. This number = Combat Ratio.
    this.combatRatio = wolfCombatSkill - enemyComabtSkill;

    //get the index of combat Ratio base on Combat Results Table
    var index = indexCombatRatio(this.combatRatio);

    //get the wolf damage and enemy damage from the Combat Results Table according the combat radio and random number
    this.wolfDamage = combatResultsTable[index][this.randomNum][0];
    this.enemyDamage = combatResultsTable[index][this.randomNum][1];
};

module.exports = CombatLogic;