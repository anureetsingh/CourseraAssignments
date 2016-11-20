(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController',ToBuyController )
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
   var toBuy=this;

   toBuy.items = ShoppingListCheckOffService.getToByItemList();

   toBuy.Bought=function(itemIndex){
     var itemToDelete =toBuy.items[itemIndex];
     ShoppingListCheckOffService.removeItem(itemIndex);
     ShoppingListCheckOffService.addItem(itemToDelete);


   };
}



AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought=this;
  alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtItemsList();


}



function ShoppingListCheckOffService() {
  var service = this;
  var toByItems = [{ name: "cookies", quantity: 10 },
                  { name: "chips", quantity: 5 },
                  { name: "cold drinks", quantity: 2 },
                  { name: "peanut butter", quantity: 20 },
                  { name: "banana", quantity: 12 }
                ];
  var alreadyBoughtItem=[];
//remove the item from toBuy list
service.removeItem=function(index){
      toByItems.splice(index,1);
    };


//add item to alreadyBoughtItem list
service.addItem=function(item){

  alreadyBoughtItem.push(item);
};


//return the array toBuyItems
service.getToByItemList = function () {
   return toByItems;
 };

 //return the array getAlreadyBoughtItemsList
 service.getAlreadyBoughtItemsList = function () {
    return alreadyBoughtItem;
  };

}
})();
