(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.item = "";
  $scope.itemCount = 0
  $scope.textMessage = function(){
    if ($scope.itemCount == 0 ){
    	return "Please enter data first";
    }
    else if($scope.itemCount > 3){
    	return "Too much!";
    }
    else{
    	return "Enjoy!"
    }
  };

  $scope.checkIfTooMuch = function () {
  	var totalItemNumbers = calculatNumberOfItems($scope.item); 
    $scope.itemCount = totalItemNumbers;
    console.log($scope.itemCount);
  };

  function calculatNumberOfItems(string){
   	var totalStringCount = 0;
    if ($scope.item == ""){
      var totalItemCount = 0;
      return totalItemCount;
    }
    else{
   	  var stringArray = string.split(',');
      var totalItemCount = stringArray.length;
   	  return totalItemCount;
   }
   };
}

})();
