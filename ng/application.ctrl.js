angular.module('app')
.controller('ApplicationCtrl', function ($scope) {
  $scope.$on('login', function (_, user) {
    $scope.currentUser = user
    console.log($scope.currentUser)
  })
  $scope.$on('logout', function (_, user) {
    $scope.currentUser = null
  })
})
