var express = require('express');
var session = require('express-session');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'The Lone Wolf gamebook' });
    //res.json({message:'horray! Welcome to our api'});
});

var initial = require("./../modules/initial_module");
var wolf = require("./../modules/player_module");
var equipments_module = require("./../modules/equipments_module");
var disciplines_module = require("./../modules/disciplines_module");
var records_module = require("./../modules/records_module");
wolf.setCombatSkill(initial.get10_20RandomNum());
wolf.setEndurancePoints(initial.get20_30RandomNum());
wolf.setGoldCrowns(initial.get20_30RandomNum());
wolf.setRandomNumber(initial.get0_10RandomNum())
console.log(wolf.getCombatSkill());

//create player object
var Player = function (randomNum) {
    this.randomNum = randomNum;
    this.name = wolf;
    this.endurancePoints = 20 + this.randomNum;
    this.combatSkill = 10 + this.randomNum;
    this.goldCrowns = 10 + this.randomNum;
}
var player = new Player(Math.floor(Math.random()*(10 + 1)));

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

function isOwnEmpty(obj)
{
    for(var name in obj)
    {
        if(obj.hasOwnProperty(name))
        {
            return false;
        }
    }
    return true;
};

var equipments = equipments_module.getEquipments();
var records = records_module.getRecords();
var disciplines = disciplines_module.getDisciplines();

router.post("/game/page1", function(req, res){

    var isCorrect = true;
    var disciplinesChosen = req.body.discipline;
    var equipemntsChosen = req.body.equipment;
    var err = "";
    if(!isOwnEmpty(disciplinesChosen) && disciplinesChosen.length == 5) {
        var i = 0;
        for(i; i < 5; i++) {
            if(disciplinesChosen.indexOf(disciplinesChosen[i]) < 0) {
                isCorrect = false;
                err += "Please do not change any element value! "
            }
        }
    } else {
        err += "Please choose 5 disciplines!"
        isCorrect = false;
    }
    if(!isOwnEmpty(equipemntsChosen) && equipemntsChosen.length == 2) {
        var i = 0;
        for(i; i < 2; i++) {
            if (disciplinesChosen.indexOf(disciplinesChosen[i]) < 0) {
                err += "Please do not change any element value! "
                isCorrect = false;
            }
        }
     } else {
        err += "Please choose 2 equipments! "
        isCorrect = false;
    }

    if (isCorrect) {

        player.disciplines = disciplinesChosen;
        player.equipments = equipemntsChosen;

        req.session.player = player;

        console.log("before render1");
        var v = 1;
        var page = "./games/page" + v + ".jade"
        console.log("before render");
        res.render(page, function(err, html) {
            console.log(typeof equipments);
            console.log(typeof wolf);
            console.log(typeof records);
            console.log(typeof disciplines);
            res.render('page', { title: v, htmlPage: html , player:JSON.stringify(player), wolf:wolf, equipments:equipments, records:records, disciplines:disciplines})
        });

    } else {
        res.render('creation', {title: "Create character", errmsg:err, wolf:wolf});

    }

});





/* GET Game Creation page.*/
router.get('/creation', function(req, res) {
    res.render('creation', {title: "Create character", wolf:wolf});

});

/* GET help.*/
router.get('/help', function(req, res, next) {
    res.render('help', {title: "Game rules"});
});


router.get('/:value', function(req, res, next) {
    // On récupère le paramètre de l'URL
    var v = req.params.value
    req.session.name

    // On crée dynamiquement la page qu'on souhaite charger
    var page = "./games/page" + v + ".jade"

    // On veut d'abord convertir la page en HTML, une fois que la conversion
    // est faite, on va injecter le HTML généré vers le fichier page.jade
    res.render(page, function(err, html) {
        res.render('page', { title: v, htmlPage: html , wolf:wolf, equipments:equipments, records:records, disciplines:disciplines})
    });
});



module.exports = router;
