angular.module('app')
.filter('newLine', function ($filter) {
 return function(data) {
   if (!data) return data;
   return data.replace(/\n\r?/g, '<br />');
 }
})
.controller('DataCtrl', function ($scope, RequestsSvc, $location) {
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
        attachment: "Find a way to handle attachments",
        mail: "My name is " + $scope.currentUser.username +
            " and I am a " + $scope.currentUser.position + " at " + $scope.currentUser.organization + ". " +
            "I am requesting the following information under the Illinois Freedom of Information Act: \n \n" +
            $scope.requestText + "\n \n" +
            "I ask that you waive any and all fees associated with the gathering of this information as I am collecting and reporting on this information in the public interest. <br />I also ask that you cite reasons for any redactions pursuant to Illinois FOIA law. <br /> My contact info is as follows: \n" +
            $scope.currentUser.username + "\n" +
            $scope.currentUser.addressLineOne + "\n" +
            $scope.currentUser.addressLineTwo + "\n" +
            $scope.currentUser.city + "," + $scope.currentUser.state + " " + $scope.currentUser.postal + "\n" +
            "Phone: " + $scope.currentUser.phone + "\n\n" +
            "Much appreciated,\n" +
            $scope.currentUser.username
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
})
