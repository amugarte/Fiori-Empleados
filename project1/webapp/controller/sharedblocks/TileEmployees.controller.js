sap.ui.define([
    "gonac.project1/controller/BaseController"
],function (BaseController) {
    "use strict";

    return BaseController.extend("gonac.project1.controller.sharedblocks.TileEmployees",{

        onInit: function () {

        },

        onNavToEmployee: function () {
            let oRouter = this.getRouter();
                oRouter.navTo("createEmployee");
        }
    });
});