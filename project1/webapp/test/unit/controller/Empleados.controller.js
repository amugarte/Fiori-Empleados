/*global QUnit*/

sap.ui.define([
	"gonac/project1/controller/Empleados.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Empleados Controller");

	QUnit.test("I should test the Empleados controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
