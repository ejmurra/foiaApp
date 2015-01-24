angular.module('app')
.service('RequestsSvc', function ($http) {
  this.create = function (request) {
    return $http.post('/api/requests', request)
  }
  this.fetch = function() {
    return $http.get('/api/requests')
  }
  this.review = function(review) {
    return $http.post('/api/review', review)
  }
})
