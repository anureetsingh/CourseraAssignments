(function(){
  'use strict';

  angular.module('data')
  .controller('CategoryListController', CategoryListController);

  CategoryListController.$inject = ['categoryList'];
  function CategoryListController(categoryList){
    var cat = this;
    cat.categoryList = categoryList;
  }

})()
