'use strict';

var app = angular.module('cesta-de-compra', []);

app.controller('CestaController', ['$scope', '$http', function($scope, $http) {
  var cestaUri = 'http://localhost:3000/cestadecompras';

  $scope.init = function() {
    $scope.item = {};
    $scope.itens = [];

    $http.get(cestaUri)
      .success(function(itens) {
        $scope.itens = itens;
      });
  };

  $scope.salvar = function() {
    $http.post(cestaUri, $scope.item)
      .success(function(data) {
        $scope.init();
      })
      .error(function(err) {
        console.log(err);
      });
  };
}]);
