/**
 * Created by Zoe on 15-09-17.
 */

var equipments = [{equipment_name: "Sword", attri: "weapon"},
    {equipment_name: "Padded Leather Waistcoat", attri: "specialItem"},
    {equipment_name: "Spear", attri: "weapon"},
    {equipment_name: "Potion", attri: "backpackItem"},
    {equipment_name: "Broadsword", attri: "weapon"}];
var equipment_name;
var attri;
var increaseCS;
var increaseEndu;
var other;
var equipment = function(name, attri) {
    this.equipment_name = name;
    this.attri = attri;
};

exports.addEquipment = function(name, attri) {
    equipments.push(equipment((name, atrri)));
}

exports.getEquipments = function() {
    return equipments;
}