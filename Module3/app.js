(function(){
'use strict';

angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController',NarrowItDownController)
.service('MenuSearchService',MenuSearchService)
.constant('ApiBasePath',"https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);

//directive
function FoundItemsDirective()
{
  var ddo = {
    templateUrl: 'foundItems.html',
    restrict: 'E',
    scope: {
      foundItems: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'foundI',
    bindToController: true
  };

  return ddo;
}

function FoundItemsDirectiveController(){
 var obj =this;
 obj.checkIfEmpty= function()
 {
     if(obj.foundItems.length==0)
         return true;
    else {
      return false;
    }


};
}

//controller
NarrowItDownController.$inject=['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
var menu=this;
menu.searchItem='';
menu.found=[];
//call the http service
menu.searchItemFun=function(searchItem){
  menu.searchItem=searchItem;
  var promise=MenuSearchService.getMatchedMenuItems(menu.searchItem);
  promise.then(function(foundItems){
    menu.found = foundItems;
  });

};//remove item from menu
menu.removeItem=function(itemIndex){
menu.found.splice(itemIndex,1);
};
}

//service
MenuSearchService.$inject=['$http','ApiBasePath']
function MenuSearchService($http,ApiBasePath){
var service=this;
service.getMatchedMenuItems=function(searchItem){
      return $http({
         method :'GET',
         url:(ApiBasePath+"/menu_items.json")}).then(function (result) {
           // process result and only keep items that match
         var foundItems=[];

         if (searchItem) {
           for (var i=0;i<result.data.menu_items.length;i++){
                if(result.data.menu_items[i].description.search(searchItem)!==-1) {
                  foundItems.push(result.data.menu_items[i]);
                }
              }
            }
      return foundItems;
    });
  } ;
}





})();
