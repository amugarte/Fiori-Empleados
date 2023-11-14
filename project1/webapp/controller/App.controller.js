// sap.ui.define([
//   "gonac.project1/controller/BaseController"
// ],
//   /**
//    * @param {typeof sap.ui.core.mvc.Controller} Controller
//    */
//   function (BaseController) {
//       "use strict";

//       return BaseController.extend("gonac.project1.controller.App", {

//           onInit: function () {
//               this.onNavToLaunchpad();
//           },

//           onNavToLaunchpad: function () {
//               let oRouter = this.getRouter();
//                   oRouter.navTo("launchpad");
//           }
//       });
//   });
  
sap.ui.define(
    [
        'sap/ui/core/mvc/Controller',
        "sap/ui/core/routing/History",
        "sap/ui/core/UIComponent"
    ],
    function(Controller, History, UIComponent) {
      "use strict";
  
      return Controller.extend("gonac.project1.controller.App", {

        /**
         * @override
         */
        onInit: function() {
          // Controller.prototype.onInit.apply(this, arguments);
        },

        getRouter: function () {
          return UIComponent.getRouterFor(this);
      },

        getModel: function (sName) {
                  return this.getView().getModel(sName);
      }
        
      });
    }
  );
  