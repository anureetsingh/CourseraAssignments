(function(){
  'use strict';
  angular.module('data')
  .component('itemsComponent', {
    templateUrl: 'src/templates/itemComponent.template.html',
    bindings: {
      itemList: '<'
    }
  });

})();
