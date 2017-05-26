// ==UserScript==
// @name         Auto block mobile promoted tweets
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       @HackingThings
// @include         https://www.mobile.twitter.com*
// @include         https://mobile.twitter.com*
// @include         http://www.mobile.twitter.com*
// @include         http://mobile.twitter.com*
// @match        http://tampermonkey.net/scripts.php
// @grant        none
// ==/UserScript==


setTimeout(function(){
    (function dowork() {
        'use strict';
        var i=0;
        var elements = document.body.getElementsByTagName("span");
        i=0;
        var j=0;
        var k=0;
        for(i = 0; i < elements.length; i++)
        {
            try{
                if (elements[i].innerText.indexOf("Promoted by ")!=-1)
                {
                    var buttons = elements[i].parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByTagName("button");
                    try{
                        for(j = 0; j < buttons.length; j++)
                        {

                            if (buttons[j].parentElement.innerHTML.indexOf("aria-label=\"More\"")!=-1)
                            {
                                buttons[j].click();
                                var blocks = document.body.getElementsByTagName("span");
                                for(k = 0; k < blocks.length; k++)
                                {
                                    if (blocks[k].innerHTML.indexOf("Block ")!=-1)
                                    {
                                        blocks[k].click();
                                        var yesblock = document.body.getElementsByTagName("span");
                                        for(var l = 0; l < yesblock.length; l++)
                                        {
                                            if (yesblock[l].innerHTML.indexOf("Yes")!=-1)
                                                yesblock[l].click();
                                        }
                                    }
                                }
                            }
                        }
                    }catch(err) {}
                }
            }catch(err) {}
        }

    })();

}, 1000); //asume it takes a second to load, might need to up this with slow connections
//setTimeout(function(){location.reload();},(Math.random() * (40000 - 1000) + 1000));
