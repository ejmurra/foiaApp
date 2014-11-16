angular.module('app')
.controller('LogoutCtrl', function ($location) {
  $scope.login = function (email, password, username) {
    Session.clear()
    $location.path('/')
  }
})
