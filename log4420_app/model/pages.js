

module.exports = {
    "1" : {
        id : 1,
        html: ["/page/1/1"],
        info : null,
        accessPages:[{pageId:160, condition: null}, {pageId:273, condition: null}]
    },

    "12" : {
        id : 12,
        html: ["/page/12/1","/page/12/2", "/page/12/3"],
        info : null,
        accessPages:[{pageId:180, condition: null}, {pageId:259, condition: null}]
    },

    "57" : {
        id : 57,
        html: ["/page/57/1", "/page/57/2"],
        info : null,
        accessPages:[{pageId:331, condition: null}]
    },

    "62" : {
        id : 62,
        html: ["/page/62/1"],
        info : null,
        accessPages:[{pageId:188, condition: null}]
    },

    "70" : {
        id : 70,
        html: ["/page/70/1"],
        info : null,
        accessPages:[{pageId:209, condition: [{type: "discipline",con:"Bakanal oil", isOwn: true}]}, {pageId:259, condition: [{type: "discipline", con:"Bakanal oil", isOwn: false}]}]
    },

    "78" : {
        id : 78,
        html: ["/page/78/1", "/page/78/2"],
        info : {enemyName: "Kalkoth", combatSkill: 9, endurance: 30},
        accessPages:[{pageId:160, condition: null}, {pageId:273, condition: null}]
    },

    "85" : {
        id : 85,
        html: ["/page/85/1"],
        info : null,
        accessPages:[{pageId:300, condition: null}]
    },

    "91" : {
        id : 91,
        html: ["/page/91/1"],
        info : null,
        accessPages:[{pageId:134, condition: null}]
    },

    "129" : {
        id : 129,
        html: ["/page/129/1"],
        info : null,
        accessPages:[{pageId:155, condition: null}]
    },

    "134": {
        id: 134,
        html:["/page/134/1"],
        info : null,
        accessPages:[{pageId:57, condition: [0,3]}, {pageId:88, condition: [4,6]}, {pageId:331, condition: [7,9]}]
    },

    "155": {
        id: 155,
        html:["/page/155/1"],
        info : null,
        accessPages:[{pageId:248, condition: [-2,2]}, {pageId:191, condition: [3,10]}]
    },

    "160" : {
        id : 160,
        html: ["/page/:160/:1"],
        info : null,
        accessPages:[{pageId:204, condition: [{type: "discipline", con:"Hunting", isOwn: true}]}, {pageId:318, condition: [{type: "discipline", con:"Animal Kinship", isOwn: true}]}, {pageId:78, condition: [{type: "discipline", con:"Hunting", isOwn: false}, {type: "discipline", con:"Animal Kinship", isOwn: false}]}]
    },

    "167": {
        id: 167,
        html: ["/page/167/1"],
        info : null,
        accessPages:[{pageId:85, condition: [0,6]}, {pageId:300, condition: [7,9]}]
    },

    "172" : {
        id : 172,
        html: ["/page/172/1"],
        info : null,
        accessPages:[{pageId:134, condition: null}]
    },

    "180" : {
        id : 180,
        html: ["/page/180/1", "/page/180/2"],
        info : {enemyName: "Kalkoth", combatSkill: 11, endurance: 35},
        accessPages:[{pageId:70, condition: "no lost endurance"}, {pageId:129, condition: "lost endurance"}]
    },

    "188" : {
        id : 188,
        html: ["/page/188/1"],
        info : null,
        accessPages:[{pageId:331, condition: null}]
    },

    "204" : {
        id : 204,
        html: ["/page/204/1"],
        info : null,
        accessPages:[{pageId:134, condition: null}]
    },


    "209" : {
        id : 209,
        html: ["/page/209/1","/page/209/2"],
        info : null,
        accessPages:[{pageId:155, condition: null}]
    },

    "245" : {
        id : 245,
        html: ["/page/245/1"],
        info : null,
        accessPages:[{pageId:91, condition: null}, {pageId:172, condition: null}]
    },

    "248" : {
        id : 248,
        html: ["/page/248/1"],
        info : null,
        accessPages:null
    },

    "288" : {
        id : 288,
        html: ["/page/288/1"],
        info : null,
        accessPages:[{pageId:167, condition: null}]
    },

    "300" : {
        id : 300,
        html: ["/page/300/1"],
        info : null,
        accessPages:[{pageId:12, condition: null}, {pageId:238, condition: null}]
    },

    "318" : {
        id : 318,
        html: ["/page/318/1"],
        info : null,
        accessPages:[{pageId:134, condition: null}]
    },

    "331": {
        id: 331,
        html: ["/page/331/1", "/page/331/2"],
        info : null,
        accessPages:[{pageId:62, condition: [0,4]}, {pageId:228, condition: [5,9]}]
    },

    "339": {
        id: 331,
        html: ["/page/339/1"],
        info : null,
        accessPages:null
    }
};

