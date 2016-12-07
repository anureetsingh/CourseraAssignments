(function(){
'use strict'
angular.module('data')
.component('categories', {
  templateUrl: 'src/templates/categoryComponent.template.html',
  bindings: {
    categoryList: '<'
  }
});
})();
