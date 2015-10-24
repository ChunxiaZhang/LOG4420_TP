/**
 * in some pages, need to calculate witch page the player can go according a random number with the interval condition.
 */

var pages = require("./../model/pages");

//get interval arry from page returning conditions
var getInterval = function(accessPages) {
    var interval = [];
    var i = 0;
    for(i; i < accessPages.length; i++) {
        interval = interval.concat(accessPages[i].condition);
    }
    return interval;
};

//calculate which page should return according the random number and page conditions
var calculateDecision = function(randNum, accessPages) {
    var conditions = [];
    var i = 0;
    for(i; i < accessPages.length; i++) {
        conditions = accessPages[i].condition;
        if(randNum >= conditions[0] && randNum <= conditions[1]) {
            return accessPages[i].pageId;
        }
    }
};

module.exports = [ {id: 134,
                    accessPages: pages["134"].accessPages,
                    interval: function() {return getInterval(this.accessPages);},
                    decide: function(randNum) {return calculateDecision(randNum, this.accessPages);}},

                    {id: 167,
                        accessPages: pages["167"].accessPages,
                        interval: function() {return getInterval(this.accessPages)},
                        decide: function(randNum) {return calculateDecision(randNum, this.accessPages)}},

                    {id: 331,
                        accessPages: pages["167"].accessPages,
                        interval: function() {return getInterval(this.accessPages)},
                        decide: function(randNum) {return calculateDecision(randNum, this.accessPages)}}
                  ];