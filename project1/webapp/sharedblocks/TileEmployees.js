sap.ui.define([
    "sap/uxap/BlockBase"
], function (BlockBase) {
    "use strict";

    let oEmployees = BlockBase.extend("gonac.project1.sharedblocks.TileEmployees", {
        metadata: {
            views: {
                Collapsed: {
                    viewName: "gonac.project1.sharedblocks.TileEmployees",
                    type: "XML"
                },
                Expanded: {
                    viewName: "gonac.project1.sharedblocks.TileEmployees",
                    type: "XML"
                }
            }
        }
    });

    return oEmployees;
}, true);