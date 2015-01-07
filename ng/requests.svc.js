angular.module('app')
.service('RequestsSvc', function ($http) {
  this.fetch = function() {
    return $http.get('/api/requests')
  }
  this.create = function (request) {
    return $http.post('/api/requests', request)
  }
})
