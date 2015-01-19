angular.module('app')
.controller('LeftCtrl', function($scope, $timeout, $mdSidenav, $log, $state) {
  $scope.close = function() {
    $mdSidenav('left').close()
    .then(function(){
      $log.debug("close LEFT is done");
    });
  };
  $scope.content = ['Home','Requests','File','Register'];
  $scope.editorContent = ['Review', 'Manage'];
$scope.setPage = function (page) {
  newPage = page.toLowerCase();
  $state.transitionTo(newPage);
};
})
