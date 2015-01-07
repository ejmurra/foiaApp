angular.module('app')
.controller('RegisterCtrl', function ($scope, UserSvc) {
  $scope.register = function (email, password, nameFirst, nameLast, addressLineOne, addressLineTwo, city, state, postal, organization, position, phone) {
    UserSvc.register(email, password, nameFirst, nameLast, addressLineOne, addressLineTwo, city, state, postal, organization, position, phone)
    .then(function (user) {
      $scope.$emit('login', user)
    })
  }
})
