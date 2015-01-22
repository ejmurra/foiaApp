angular.module('app')
.controller('RequestsCtrl', function($scope, RequestsSvc) {
  $scope.request = {};
  $scope.makeRequest = function () {
    if ($scope.request.text && $scope.request.subject && $scope.request.email) {
      console.log('filed')
      RequestsSvc.create({
        username: $scope.currentUser.username,
        subject: $scope.request.subject,
        toEmail: $scope.request.email,
        //date: 'date.now',
        replied: false,
        requestFull: "My name is " + $scope.currentUser.username +
        " and I am a " + $scope.currentUser.position + " at " + $scope.currentUser.organization + ". " +
        "I am requesting the following information under the " + $scope.currentUser.state + " Freedom of Information Act: \n \n" +
        $scope.request.text + "\n \n" +
        "I ask that you waive any and all fees associated with the gathering of this information as I am collecting and reporting on this information in the public interest. \n I also ask that you cite reasons for any redactions pursuant to Illinois FOIA law. \n My contact info is as follows: \n" +
        $scope.currentUser.username + "\n" +
        $scope.currentUser.addressLineOne + "\n" +
        $scope.currentUser.addressLineTwo + "\n" +
        $scope.currentUser.city + "," + $scope.currentUser.state + " " + $scope.currentUser.postal + "\n" +
        "Phone: " + $scope.currentUser.phone + "\n\n" +
        "Much appreciated,\n" +
        $scope.currentUser.username,
        response: 'There is no response yet.',
        attachment: 'There is no attachment.'
      }).success(function (request) {
        $scope.request.text = null,
        $scope.request.subject = null,
        $scope.request.email = null
      })
    } else {
      console.log('request not sent', $scope.request.text, $scope.request.email, $scope.request.subject)
    }
  }
  RequestsSvc.fetch().success(function (requests) {
    $scope.requests = requests
  })
  $scope.$on('ws:new_post', function (_, request) {
    $scope.$apply(function () {
      $scope.requests.unshift(request)
    })
  })
})
