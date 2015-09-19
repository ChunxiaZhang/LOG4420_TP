/**
 * Created by Zoe on 15-09-18.
 */
var name;
var ability;
var discipline = function(name, ability) {
    this.name = name;
    this.ability = ability;
};

var diciplines = [{name:"Hunting", ability:"hunt food"},
				{name:"Tracking", ability:"find paths"},
				{name:"Weaponskill", ability:"power"},
				{name:"Healing", ability:"high endurance"},
				{name:"Camouflage", ability:"speed"}];

exports.addDiscipline = function(name, ability) {
    diciplines.push(discipline((name, ability)));
}

exports.getDisciplines = function() {
    return diciplines;
}
