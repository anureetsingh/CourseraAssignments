(function(){

angular.module('data')
.service('MenuDataService',MenuDataService )
.constant('ApiBasePath',"https://davids-restaurant.herokuapp.com");

MenuDataService.$inject=['$http','ApiBasePath'];

function MenuDataService($http,ApiBasePath){
  var service =this;
  service.getAllCategories=function(){
    return $http({
      method:'GET',
      url:(ApiBasePath+"/categories.json")}).then(function (returned){
        var categories = returned.data;
        return categories;
      });

    };
    service.getItemsForCategory = function(categoryShortName){
      return $http({
        method:'GET',
        url:(ApiBasePath+"/menu_items.json?category="+categoryShortName)}).then(function (response){
          var menu_items = response.data.menu_items;
          return menu_items;
        });

  };


}


})();
