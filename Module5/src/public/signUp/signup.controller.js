(function(){
  'use strict';

  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['MenuService'];
  function SignUpController(MenuService){
    var sign = this;
    sign.flag = false;
    sign.btnFlag = true;
    sign.saveStatus = false;

    sign.user = {};
    sign.user.firstname="";
    sign.user.lastname="";
    sign.user.email="";
    sign.user.phone="";
    sign.user.favItem="";
    sign.user.itemName="";
    sign.user.itemDescription="";


    sign.checkFavMenuItem = function(short_name){
      if(!short_name || short_name.length < 2)
        return;
      var promise = MenuService.getMenuItemBySname(short_name.toUpperCase());
      promise.then(function(response){
        if(response.status == 500){
          sign.flag = true;
          sign.btnFlag = true;
        }
        else{
          sign.flag = false;
          sign.btn_flag = false;
          sign.user.itemName = response.name;
          sign.user.itemDescription = response.description;
        }
      });
    };

    sign.saveInfo = function(user){
      sign.saveStatus = MenuService.saveUserInfo(user);
    };
  }
})();
