function MainController($scope){

  $scope.contact = {
  name: "aaron",
  email: "aaron@gmail.com",
  phone: "111-111"
  };
}


angular
  .module('app')
  .controller('MainController', MainController);
