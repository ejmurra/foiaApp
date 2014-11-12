angular.module('app')
.controller('DataCtrl', function ($scope, RequestsSvc) {
  $scope.makeRequest = function () {
    if ($scope.requestText) {
      RequestsSvc.create({
        parentUser: $scope.currentUser.username,
        date: Date.now,
        response: false,
        to: $scope.requestEmail,
        subject: $scope.requestSubject,
        text: $scope.requestText,
        html: null,
        responseText: "This is what the request returned",
        attachment: "Find a way to handle attachments"
      }).success(function (request) {
        $scope.requests.unshift(request)
        $scope.requestText = null
        $scope.requestEmail = null
        $scope.requestSubject = null
      })
    }
    RequestsSvc.fetch().success(function (requests) {
      $scope.requests = requests
    })
  }
  RequestsSvc.fetch().success(function (requests) {
    $scope.requests = requests
  })
})
