var formController = angular.module('formController', []);

formController.controller('formController', function($scope, $http, $window, factoryProperties){

    $scope.newPlayerName = "";
    $scope.isWholeFormValid = true;
    factoryProperties.disciplinesList(function(disciplines){
        $scope.disciplinesScope = disciplines;
    });
    factoryProperties.equipmentsList(function(equipments){
        $scope.equipmentsScope = equipments;
    });

    $scope.formValidator = {
        isWholeFormValid: false,
        isDiscCheckedValid: false,
        isEquipCheckedValid: false,
        isMoreThan5: false,
        isMoreThan2: false,
        getCheckedNum: function(items) {
            return items.reduce(function(pv, cv) {
                return cv.checked ? pv + 1 : pv + 0;
            }, 0);
        },
    };


    $scope.changeDiscStatus = function(index){
        var num = $scope.formValidator.getCheckedNum($scope.disciplinesScope);
        console.log("num: " + num);

        if (num > 5) {
            $scope.formValidator.isMoreThan5 = true;
            console.log($scope.formValidator.isMoreThan5);
            $scope.disciplinesScope[index].checked = false;
            num -= 1;
        } else {
            $scope.formValidator.isMoreThan5 = false;
        }

        if (num == 5) {
            $scope.formValidator.isDiscCheckedValid = true;
        } else {
            $scope.formValidator.isDiscCheckedValid = false;
        }
    };



    $scope.changeEquipStatus = function(index){
        var num = $scope.formValidator.getCheckedNum($scope.equipmentsScope);

        if (num > 2) {
            $scope.formValidator.isMoreThan2 = true;
            $scope.equipmentsScope[index].checked = false;
            num -= 1;
        } else {
            $scope.formValidator.isMoreThan2 = false;
        }

        if (num == 2) {
            $scope.formValidator.isEquipCheckedValid = true;
        } else {
            $scope.formValidator.isEquipCheckedValid = false;
        }
    };

    $scope.getDisciplineValues = function() {
        var disciplineValue = [];
        $scope.disciplinesScope.forEach(function(obj){
            if(obj.checked) {
                disciplineValue.push(obj.value);
            }
        });
        return disciplineValue;
    }
    $scope.getEquipmentValues = function() {

        var equipmentValue = [];
        $scope.equipmentsScope.forEach(function(obj){
            if(obj.checked) {
                equipmentValue.push(obj.value);
            }
        });
        return equipmentValue;
    }

    $scope.player = function(){
        return {playerName:$scope.newPlayerName, discipline:$scope.getDisciplineValues(), equipment:$scope.getEquipmentValues()};
    };

    $scope.submitForm = function(inputValid) {

        if (inputValid && $scope.formValidator.isDiscCheckedValid && $scope.formValidator.isEquipCheckedValid) {
            console.log({discipline:$scope.getDisciplineValues(), equipment:$scope.getEquipmentValues()});

            $http.post('/game/page1', $scope.player())
                .success(function(){
                    $window.location.href = "/1/1";
                });
        } else {
            alert("Form is not valid!");
        }
    }
});

/*
 $scope.postBackEnd = function () {

 var checkNumbers = $scope.disciplinesScope.filter(function(el) {
 return el.checked;
 }).map(function(el, i) {
 return i;
 });

 $http.post(url, checkNumbers);
 };

* */