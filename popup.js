document.getElementById('saveButton').addEventListener('click', save);

$(document).ready(function(){
    updateStored();
});

function save(){
    var replacementText = document.getElementById("replacementText").value;
    var replacementImageURL = document.getElementById("replacementImageURL").value;
    var replacementURL = document.getElementById("replacementURL").value;
    console.log(replacementText);
    console.log(replacementImageURL);
    console.log(replacementURL);
    console.log("hello");
    var result = {};
    if(replacementText.length > 0)
        result.replacementText = replacementText;
    if(replacementImageURL.length > 0)
        result.replacementImageURL = replacementImageURL;
    if(replacementURL.length > 0)
        result.replacementURL = replacementURL;
    console.log(result);
    chrome.storage.local.set(result, function(){
        console.log("stored in memory is" + result);
        updateStored();
    });
    
}

function updateStored(){
    
    chrome.storage.local.get(['replacementText', 'replacementURL', 'replacementImageURL'], function (result) {
        console.log(result);
        document.getElementById("currentReplacementText").innerText = result.replacementText;
        document.getElementById("currentReplacementImageURL").innerText = result.replacementImageURL;
        document.getElementById("currentReplacementURL").innerText = result.replacementURL;
    });
}