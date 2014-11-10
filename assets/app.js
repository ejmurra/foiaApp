var app = angular.module('app',[])
app.service('RequestsSvc', function ($http) {
  this.fetch = function () {
    return $http.get('/api/requests')
  }
  this.create = function (request) {
    return $http.post('/api/requests', request)
  }
})
app.controller('DataCtrl', function ($scope, RequestsSvc) {
  $scope.makeRequest = function () {
    if ($scope.requestText) {
      RequestsSvc.create({
        parentUser: 'eli',
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
  }

  RequestsSvc.fetch().success(function (requests) {
    $scope.requests = requests
  })

  $scope.users = [
  {
    username : "dickeyxxx",
    password : "pass",
    email: "trevor@myemail.com",
    organization: "The Daily Illini",
    position: "Reporter",
    lineOne: "555 W Orange St.",
    lineTwo: "P.O. box 32",
    city: "Urbana",
    state: "Illinois",
    postal: "61061"
  },
  {
    username : "Michael Joseph",
    password : "ghost",
    email: "Mikey@myemail.com",
    organization: "News Herald",
    position: "Editor",
    lineOne: "666 W Yellow St.",
    lineTwo: "Apt. #706",
    city: "Champaign",
    state: "Wyoming",
    postal: "61616"
  }
]
})
