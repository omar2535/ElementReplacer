document.getElementById('saveButton').addEventListener('click', save);

$(document).ready(function(){
    checkOnOff();
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

document.getElementById("onCheck").addEventListener('click', function () {
    var checkBox = document.getElementById("onCheck");
    var text = document.getElementById("onText");
    if (checkBox.checked == true) {
        console.log("checkbox is ON");
        document.getElementById("onText").innerText = "Extension is ON";
        chrome.storage.local.set({"state": true}, function(){
            console.log("State changed to true");
        });
    } else {
        console.log("checkbox is OFF");
        document.getElementById("onText").innerText = "Extension is OFF";
        chrome.storage.local.set({
            "state": false
        }, function () {
            console.log("State changed to false");
        });
    }
});

//Checks on/off state of chrome extension
function checkOnOff(){
    chrome.storage.local.get('state', function(result){
        console.log(result);
        if(result.state == true){
            document.getElementById("onCheck").checked = true;
            document.getElementById("onText").innerText = "Extension is ON";
        }else{
            document.getElementById("onCheck").checked = false;
            document.getElementById("onText").innerText = "Extension is OFF";
        }
    });
}