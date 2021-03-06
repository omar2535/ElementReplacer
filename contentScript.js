$(document).ready(function(){
    
    chrome.storage.local.get(['replacementText', 'replacementURL', 'replacementImageURL', 'state'], function (result) {
        console.log(result);
        //Replace all text
        if(result.state){
            $('body :not(script)').contents().filter(function () {
                return this.nodeType === 3;
            }).replaceWith(function () {
                return this.nodeValue.replace(/e/g, result.replacementText);
            });
            //replace all images
            $("img").attr("src", result.replacementImageURL);
            //replace all links(hrefs)
            $("a").attr("href", result.replacementURL);
        }
    });

});