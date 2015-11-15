/**
 * Created by Zoe on 2015-11-12.
 */


var gameApp = angular.module('gameApp', ['ngMessages'
]);
gameApp.controller('formController', function($scope, factoryProperties){
    $scope.checkedNum = "";
    $scope.newPlayerName = "";
    factoryProperties.disciplinesList(function(disciplines){
        $scope.disciplinesScope = disciplines;
    });
    factoryProperties.equipmentsList(function(equipments){
        $scope.equipmentsScope = equipments;
    });

    $scope.getCheckedDiscNum = function() {
        var num = 0;
        var length = $scope.disciplinesScope.length;
        var i = 0;
        for(i; i < length; i++){
            if ($scope.disciplinesScope[i].checked) {
                num += 1;
            }
        }
        return num;
    }

    $scope.changeDiscStatus = function(index){
        var num = $scope.getCheckedDiscNum();
        console.log("num: " + num);
        $scope.checkDiscDisable = false;
        if (num > 5) {
            $scope.checkDiscDisable = true;
            $scope.disciplinesScope[index].checked = false;
        }


        $scope.numCheckedDisc = $scope.getCheckedDiscNum();
        console.log("$scope.numCheckedDisc: " + $scope.numCheckedDisc);
        $scope.formAction.disciplinesCheck.$setValidity("checkedNum", true);
        if ($scope.numCheckedDisc != 5) {
            $scope.formAction.disciplinesCheck.$setValidity("checkedNum", false);
        }
    };

    $scope.getCheckedEquipNum = function() {
        var num = 0;
        var length = $scope.equipmentsScope.length;
        var i = 0;
        for(i; i < length; i++){
            if ($scope.equipmentsScope[i].checked) {
                num += 1;
            }
        }
        return num;
    }

    $scope.changeEquipStatus = function(index){
        $scope.checkEquipDisable = false;
        if ($scope.equipmentsScope[index].checked) {
            var num = $scope.getCheckedEquipNum();
            if (num > 2) {
                $scope.checkEquipDisable = true;
                $scope.equipmentsScope[index].checked = false;
            }
        }
        $scope.numCheckedEquip = $scope.getCheckedEquipNum();

    };
});

gameApp.factory('factoryProperties', function($http){
    return {
        disciplinesList: function(callback){
            $http({
                method: 'GET',
                url: './../json/disciplines.json',
                cache: true
            }).success(callback);
        },
        equipmentsList: function(callback){
            $http({
                method: 'GET',
                url: './../json/equipments.json',
                cache: true
            }).success(callback);
        }
    };
});
gameApp.factory('factoryPlayers', function($http){
    return {
        list: function(callback) {
            $http({
                method: 'GET',
                url:'/game/players',
                cache: true
            }).success(callback);
        },
        findRecord: function(id, callback) {
            $http({
                method: 'GET',
                url: '/game/record/'+ id,
                cache: true
            }).success(callback);
        },
        deletePlayer: function(id, callback) {
            $http({
                method: 'DELETE',
                url: '/game/delete/' + id,
                cache: false
            }).success(callback);
        }
    };
});


gameApp.controller("playersListCtrl", function($scope, factoryPlayers){
    factoryPlayers.list(function(dbPlayers){
        $scope.dbPlayers = dbPlayers;
        /*console.log(dbPlayers);
        console.log("get record starting");
        $scope.dbRecords = [];
        var length = dbPlayers.length;
        var i = 0;
        for(i; i < length; i++) {
            factoryPlayers.findRecord(dbPlayers[i]._id, function(dbRecord){
                $scope.dbRecords.push(dbRecord);
            });
        }*/

    });

    $scope.deletePlayer = function(playerId) {
        factoryPlayers.deletePlayer(playerId, function () {
            var i = 0;
            var length = $scope.dbPlayers.length;
            var index;
            console.log(typeof playerId);
            console.log(typeof $scope.dbPlayers[i]._id);
            for (i; i < length; i++) {
                if (playerId == $scope.dbPlayers[i]._id) {
                    index = i;
                }
            }
            console.log(index);
            $scope.dbPlayers.splice(index, 1);
        });
    }

    $scope.restart = function(playerId) {
        factoryPlayers.findRecord(playerId, function(record){
            $scope.currentPlayerRecord = record;
        });
    }
});

gameApp.directive("isUnique", function($http){
    return {
        restrict: 'A',
        replace: 'true',

    };
});

