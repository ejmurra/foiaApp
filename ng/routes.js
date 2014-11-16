angular.module('app')
.config(function ($routeProvider) {
  $routeProvider
  .when('/', { controller: 'DataCtrl', templateUrl: 'requests.html'})
  .when('/register', { controller: 'RegisterCtrl', templateUrl: 'register.html' })
  .when('/login', { controller: 'LoginCtrl', templateUrl: 'login.html' })
  .when('/request', { controller: 'DataCtrl', templateUrl: 'makerequest.html'})
  .when('/logout', { controller: 'LogoutCtrl', template: '' })
})
