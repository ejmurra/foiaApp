angular.module('app')
.controller('DataCtrl', function ($scope, RequestsSvc) {
  RequestsSvc.fetch().success(function (requests) {
    $scope.requests = requests
  })
})
