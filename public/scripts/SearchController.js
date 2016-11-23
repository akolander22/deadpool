angular.module('deadApp').controller('SearchController', function($http){
  var vm = this;

  vm.submit = function(){
    console.log("hit submit", vm.info);

  }

})
