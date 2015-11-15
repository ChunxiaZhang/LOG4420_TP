/**
 * Created by Zoe on 2015-11-13.
 */

angular.module('playersFactory', [])
    .factory('players', function($http){
        return {
            list: function(callback) {
                $http({
                    method: 'GET',
                    url:'/game/players',
                    cache: true
                }).success(callback);
            },
            find: function(id, callback) {
                $http({
                    method: 'GET',
                    url: '/game/record/:id',
                    cache: true
                }).success(callback);
            }
        }
    });