(function(){
  'use strict';

  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['MenuService', 'ApiPath'];
  function MyInfoController(MenuService, ApiPath){
    var info = this;

    info.basePath = ApiPath;
    info.IsValidUser = false;

    info.userinfo = MenuService.getUserInfo();

    info.validate=function(){
          if(info.userinfo)
          {
            info.IsValidUser = true;
          
          }
        return info.IsValidUser
    };
  };
})();
