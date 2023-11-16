sap.ui.define([
  "gonac.project1/controller/BaseController"
],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (BaseController) {
      "use strict";

      return BaseController.extend("gonac.project1.controller.App", {

          onInit: function () {
              this.onNavToLaunchpad();
          },

          onNavToLaunchpad: function () {
              let oRouter = this.getRouter();
                  oRouter.navTo("launchpad");
          }
      });
  });
  