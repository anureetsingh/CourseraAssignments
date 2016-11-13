
(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    $scope.items = "";
    $scope.message = "";
    $scope.msgColor = "";
    $scope.bodrColor = "black";

    $scope.checkLunch = function(){
      var listOfItem = $scope.items.split(',');
      var count = 0;
      for(var i = 0; i < listOfItem.length; i++){
        if(listOfItem[i] != "" && listOfItem[i] != " ")
          count += 1;
      }

      if(count == 0){
        $scope.msgColor = $scope.bodrColor = "red";
        $scope.message = "Please enter data first";
      }
      else if(count <= 3){
        $scope.msgColor = $scope.bodrColor = "green";
        $scope.message = "Enjoy!";
      }
      else{
        $scope.msgColor = $scope.bodrColor = "green";
        $scope.message = "Too much!";
      }
    };
  }

})();
