(function () {
'use strict';

angular.module('data')
.controller('ItemDetailController', ItemDetailController);


ItemDetailController.$inject = ['itemList'];
function ItemDetailController(itemList) {
  var itemDetail = this;
   itemDetail.itemList=itemList;
   
}

})();
