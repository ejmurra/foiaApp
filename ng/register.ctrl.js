angular.module('app')
.controller('RegisterCtrl', function ($scope, UserSvc, $state) {
  $scope.register = function (email, password, nameFirst, nameLast, addressLineOne, addressLineTwo, city, state, postal, organization, position, phone) {
    UserSvc.register(email, password, nameFirst, nameLast, addressLineOne, addressLineTwo, city, state, postal, organization, position, phone)
    .success(function () {
      UserSvc.login(email,password)
      .then(function(response) {
        $scope.$emit('login', response.data)
        $scope.email = null,
        $scope.password = null,
        $scope.nameFirst = null,
        $scope.nameLast = null,
        $scope.addressLineOne = null,
        $scope.addressLineTwo = null,
        $scope.city = null,
        $scope.state = null,
        $scope.postal = null,
        $scope.organization = null,
        $scope.position = null,
        $scope.phone = null,
        $state.transitionTo('requests')
      })
    })
  }
})
