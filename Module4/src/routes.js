(function(){
  'use strict';
  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'src/templates/homeTemplate.html'
      })

      .state('categories', {
        url: '/categories',
        templateUrl: 'src/templates/categoryTemplate.html',
        controller: 'CategoryListController as cat',
        resolve: {
          categoryList: ['MenuDataService', function(MenuDataService){
            return MenuDataService.getAllCategories();
          }]
        }
      })

      .state('items', {
    url: '/items/{shortName}',
    templateUrl: 'src/templates/itemTemplate.html',
    // templateUrl: 'src/shoppinglist/templates/item-detail.template.html',
    controller: "ItemDetailController as itemDetail",
    resolve: {
      itemList: ['MenuDataService','$stateParams', function(MenuDataService,$stateParams){
        return MenuDataService.getItemsForCategory($stateParams.shortName);
      }]
    }
  })
}

})()
