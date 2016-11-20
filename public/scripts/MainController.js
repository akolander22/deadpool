angular.module('deadApp').controller('MainController', function($http){
  var vm = this;

  vm.submit = function(){

    console.log("searching for ", vm.search)
  }

});
