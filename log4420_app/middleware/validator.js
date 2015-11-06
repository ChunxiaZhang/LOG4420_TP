
/*
* To valid the disciplines and equipments chosen
* */
exports.validateChoices = function() {

    return function (req, res, next) {
        var isValid = true;
        var err = " ";
        var disiciplines = req.body.discipline;
        var equipments = req.body.equipment;
        // confirm if disciplines are valid
        if (disiciplines && disiciplines.length === 5) {
            var i = 0;
            for (i; i < 5; i++) {
                if (disiciplines.indexOf(disiciplines[i]) < 0) {
                    isValid = false;
                    err = err.concat("Please do not change any element value!");
                }
            }
        } else {
            isValid = false;
            err = err.concat("Please choose 5 disciplines!");
        }

        // confirm if equipments are valid
        if (equipments && equipments.length === 2) {
            var i = 0;
            for (i; i < 2; i++) {
                if (equipments.indexOf(equipments[i]) < 0) {
                    isValid = false;
                    err = err.concat("Please do not change any element value!");
                }
            }
        } else {
            isValid = false;
            err = err.concat("Please choose 2 equipments!");

        }
        if(!isValid) {
            res.render('creation', {title: "Create character", errmsg:err});
        } else {
            next();
        }
    }

}
