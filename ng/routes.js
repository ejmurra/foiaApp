angular.module('app')
.config(['$stateProvider', function ($stateProvider) {
  var home = {
    name: 'home',
    url: '/',
    templateUrl: 'base.html'
  },
  requests = {
    name: 'requests',
    url: 'requests',
    templateUrl: 'requests.html',
    controller: 'RequestsCtrl'
  },
  register = {
    name: 'register',
    url: 'register',
    templateUrl: 'register.html',
    controller: 'RegisterCtrl'
  },
  file = {
    name: 'file',
    url: 'file',
    templateUrl: 'fileRequest.html',
    controller: 'RequestsCtrl'
  },
  review = {
    name: 'review',
    url: 'review',
    templateUrl: 'review.html',
    controller: 'RequestsCtrl'
  },
  manage = {
    name: 'manage',
    url: 'manage',
    templateUrl: 'manage.html',
    controller: 'ManageCtrl'
  };

  $stateProvider.state(home);
  $stateProvider.state(requests);
  $stateProvider.state(register);
  $stateProvider.state(file);
  $stateProvider.state(review);
  $stateProvider.state(manage);
}])
.run(['$state', function ($state) {
  $state.transitionTo('home');
}])
