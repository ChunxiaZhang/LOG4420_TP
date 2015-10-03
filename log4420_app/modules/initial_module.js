/**
 * Created by Zoe on 15-09-17.
 */
var HIGH = 10;
var LOW = 0;
/*function getRandomNum() {
    return Math.floor(Math.random()*(HIGH - LOW + 1) + LOW);
}*/
var randomNum = Math.floor(Math.random()*(HIGH - LOW + 1) + LOW);
exports.get0_10RandomNum = function() {
    return randomNum;
}

exports.get10_20RandomNum = function() {
    return 10 + randomNum;
}

exports.get20_30RandomNum = function() {
    return 20 + randomNum;
}