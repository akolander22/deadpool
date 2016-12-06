angular.module('deadApp').config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'views/search.html',
    controller: 'SearchController',
    controllerAs: 'search'
  })
  .when('/login', {
    templateUrl: 'views/login.html',
    controller: 'LoginController',
    controllerAs: 'login'
  })
  .when('/register', {
    templateUrl: 'views/register.html',
    controller: 'RegisterController',
    controllerAs: 'register'
  })


  $locationProvider.html5Mode(true);
})
