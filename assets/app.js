var app = angular.module('foia',[])

app.controller('RequestsCtrl', function ($scope, $http) {
  $scope.makeRequest = function () {
    if ($scope.postTime) {
      $scope.requests.unshift({
        parentUser: 'Charles Smith',
        date: $scope.postTime,
        response.replied: false

      })
      $scope.postTime = null
    }
  }

  $http.get('http://localhost:3000/api/requests')
  .success(function (requests) {
    $scope.requests = requests
  })
  $http.get('http://localhost:3000/api/users')
  .success(function (users) {
    $scope.users = users
  })

  // $scope.buildData = function() {
  //   var returnArr = []
  //   angular.forEach($scope.data)
  // }



})
