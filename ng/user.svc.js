angular.module('app')
.service('UserSvc', function ($http) {
  var svc = this
  svc.getUser = function () {
    return $http.get('/api/users')
  }
  svc.login = function (email, password) {
    return $http.post('/api/sessions', {
      email: email, password: password
    }).then(function (val) {
      svc.token = val.data
      $http.defaults.headers.common['X-Auth'] = val.data
      return svc.getUser()
    })
  }
  svc.register = function (email, password, nameFirst, nameLast, addressLineOne, addressLineTwo, city, state, postal, organization, position, phone) {
    username = nameFirst + ' ' + nameLast
    console.log(email, password, phone)
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
    // .then(function (val) {
    //   svc.token = val.data
    //   $http.defaults.headers.common['X-Auth'] = val.data
    //   return svc.getUser()
    // })
  }
})
