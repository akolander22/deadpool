angular.module('deadApp').controller('MainController', function($http){
  var vm = this;

  vm.submit = function(){
    console.log("hit submit");
    // console.log("searching for ", vm.search)
  }

});
