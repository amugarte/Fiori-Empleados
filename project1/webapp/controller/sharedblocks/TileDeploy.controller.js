sap.ui.define([
    "gonac.project1/controller/BaseController"
],function (BaseController) {
    "use strict";

    return BaseController.extend("gonac.project1.controller.sharedblocks.TileDeploy",{
        onInit: function () {

        },

        onRedirect: function () {
            let sRef = "https://372ef2fdtrial-dev-seminar-approuter.cfapps.us10.hana.ondemand.com";
            sap.m.URLHelper.redirect(sRef, true);
        }
    });
});