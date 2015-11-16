/**
 * Created by Zoe on 2015-11-12.
 */


var gameApp = angular.module('gameApp', ['ngMessages', 'ngRoute',
    'formController'
]);
gameApp.config(function($routeProvider){
    $routeProvider.
        when('/', {
        templateUrl: 'views/test.html',
        controller: 'formController'
    });
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

