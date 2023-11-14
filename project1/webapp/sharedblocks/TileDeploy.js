sap.ui.define([
    "sap/uxap/BlockBase"
], function (BlockBase) {
    "use strict";

    let oDeploy = BlockBase.extend("gonac.project1.sharedblocks.TileDeploy", {
        metadata: {
            views: {
                Collapsed: {
                    viewName: "gonac.project1.sharedblocks.TileDeploy",
                    type: "XML"
                },
                Expanded: {
                    viewName: "gonac.project1.sharedblocks.TileDeploy",
                    type: "XML"
                }
            }
        }
    });

    return oDeploy;
}, true);