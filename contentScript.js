$(document).ready(function(){
    
    chrome.storage.local.get(['replacementText', 'replacementURL', 'replacementImageURL'], function (result) {
        console.log(result);
        //Replace all text
        $('body :not(script)').contents().filter(function () {
            return this.nodeType === 3;
        }).replaceWith(function () {
            return this.nodeValue.replace(/e/g, result.replacementText);
        });
        //replace all images
        $("img").attr("src", result.replacementImageURL);
        //replace all links(hrefs)
        $("a").attr("href", result.replacementURL);
    });

});