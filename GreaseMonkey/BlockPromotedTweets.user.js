// ==UserScript==
// @name         Auto block promoted tweets
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       @HackingThings
// @include         https://www.twitter.com*
// @include         https://twitter.com*
// @include         http://www.twitter.com*
// @include         http://twitter.com*
// @match        http://tampermonkey.net/scripts.php
// @grant        none
// ==/UserScript==
 
(function() {
    'use strict';

    // Your code here...
    //alert('test');
    var elements = document.body.getElementsByTagName("li");
    var i=0;
    var j=0;
   

    for(i = 0; i < elements.length; i++)
    {
        try{
        if (elements[i].innerHTML.indexOf("Icon Icon--promoted")!=-1)
                    {
                        //alert('button');
                        var buttons = elements[i].getElementsByTagName("button");
                        try{
                        for(j = 0; j < buttons.length; j++)
                        {
                            if (buttons[j].innerHTML.indexOf("Block")!=-1)
                                {
                                    buttons[j].click();
                                    var blocks = document.body.getElementsByClassName("btn primary-btn caution-btn block-button");
                                    for(j = 0; j < blocks.length; j++)
                                    {
                                        blocks[j].click();           
                                    }
                                    
                                }
                        }
                        }catch(err) {}
                        
                    }
            }catch(err) {}
    }
    
})();
