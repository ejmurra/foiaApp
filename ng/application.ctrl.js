angular.module('app')
.controller('ApplicationCtrl', function ($scope,$timeout,$mdSidenav,$log,$state) {
  $scope.$on('login', function (_, user) {
    $scope.currentUser = user
  });
  $scope.toggleLeft = function() {
    $mdSidenav('left').toggle()
    .then(function(){
      $log.debug("toggle left is done");
    });
  };
  $scope.home = function() {
    $state.transitionTo('home');
  }
  $scope.logout = function() {
    $scope.currentUser = null
  }
});
