/**
 * Cue Controller Plugin
 *
 * Copyright (c) 2024 Tobias Rös <roes@amicaldo.de>
 * All rights reserved.
 *
 * This software is provided "as-is," without any express or implied warranty.
 * In no event shall the author be held liable for any damages arising from the use of this software.
 *
 * Permission is not granted to modify, distribute this software without licence.
 * Unauthorized copying, modification, distribution, or any form of use without permission
 * is strictly prohibited.
 *
 * With a valid license, you are permitted to modify and use this software.
 *
 * For licensing, please use html.graphics
 */


import * as UI from "../lib/ui.js";

function PluginInstance() {
    var pluginRootFolder = '/plugins/runNextTemplate/';
    var plug = this;

    this.render = () => {
        console.log('PLUGIN loading: runNextTemplate...');
        let options = {
            description: ' ',  // Empty description for styling
            overToolTip: 'Stops current template and runs the next in cue when pressed',
            caption: 'NEXT CUE &#9655;',
            color: 'blue'
        }

        // Create the button using the UI.button method
        this.btn = UI.button(options);

        // Style the button container and button itself
        this.btn.style.maxWidth = '30%';
        this.btn.style.margin = '0 auto';

        // Find the MasterCONTINUE button
        var masterContinueButton = document.getElementById("MasterCONTINUE");
        // Insert the new button directly after the MasterCONTINUE button
        masterContinueButton.insertAdjacentElement('afterend', this.btn);

        // Hide the spxTableHead element if it exists
        var spxTableHead = this.btn.querySelector('.spxTableHead');
        if (spxTableHead) {
            spxTableHead.style.display = 'none';
        }

        this.btn.querySelector('#btn').addEventListener("click", function() {
            plug.runNextTemplate();
        });
    }

    this.runNextTemplate = () => {
        var toggle = document.getElementById("MasterTOGGLE");
        if (toggle.className.includes("bg_green")) {
            toggle.click();
        } else {
            toggle.click();
            var itemList = document.getElementById("itemList");
            var currentIndex;
            var numberOfCues = itemList.children.length;
            for (var i = 0; i < numberOfCues; i++) {
                var item = itemList.children[i];
                if (item.className.includes("inFocus")) {
                    currentIndex = i;
                    break;
                }
            }
            focusRow(itemList.children[currentIndex + 1]);
        }
    }
}

var plugin = plugin || new PluginInstance;
plugin.render();
