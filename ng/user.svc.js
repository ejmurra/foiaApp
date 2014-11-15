angular.module('app')
.service('UserSvc', function ($http) {
  var svc = this
  svc.getUser = function () {
    return $http.get('/api/users')
  }
  svc.login = function (email, password, username) {
    return $http.post('/api/sessions', {
      email: email, password: password, username: username
    }).then(function (val) {
      svc.token = val.data
      $http.defaults.headers.common['X-Auth'] = val.data
      return svc.getUser()
    })
  }
  svc.register = function (email, password, nameFirst, nameLast, addressLineOne, addressLineTwo, city, state, postal, organization, position, phone) {
    username = nameFirst + ' ' + nameLast
    return $http.post('/api/users', {
      email: email,
      password: password,
      nameFirst: nameFirst,
      nameLast: nameLast,
      username: username,
      addressLineOne: addressLineOne,
      addressLineTwo: addressLineTwo,
      city: city,
      state: state,
      postal: postal,
      organization: organization,
      position: position,
      phone: phone
    })
  }
})
