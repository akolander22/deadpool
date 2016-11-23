angular.module('deadApp').config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'views/search.html',
    controller: 'SearchController',
    controllerAs: 'search'
  })


  $locationProvider.html5Mode(true);
})
