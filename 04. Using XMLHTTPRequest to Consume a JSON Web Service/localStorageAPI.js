// Local Storage API
var k = "";
var v = "";
var storeArry = new Object();

function doFirst() {
    var saveButton = document.getElementById("saveButton");
    var remButton = document.getElementById("remButton");
    var clrButton = document.getElementById("clrButton");
    saveButton.addEventListener("click", saveInfo, false);
    remButton.addEventListener("click", removeInfo, false);
    clrButton.addEventListener("click", clearLocalStore, false);
    display();
}
function saveInfo() {
    k = document.getElementById("person").value;
    v = document.getElementById("age").value;
    localStorage.setItem(k, v);
    display();
    document.getElementById("person").value = "";
    document.getElementById("age").value = "";
}
function arrayStore() {
    var rightbox = document.getElementById("rightbox");
    storeArry = {};
    rightbox.innerHTML = "";
    for (i = 0; i < localStorage.length; i++) {
        var a = localStorage.key(i);
        var b = localStorage.getItem(a);
        storeArry[a] = b;
    }
}
function display() {
    arrayStore();
    rightbox.innerHTML = "<strong>Local Storage Items:</strong><br />";
    for (var j in storeArry) {
        rightbox.innerHTML += j + ": " + storeArry[j] + "<br />";
    }
}
function removeInfo() {
    var r = document.getElementById("person").value;
    localStorage.removeItem(r);
    display();
}
function clearLocalStore() {
    localStorage.clear();
    display();
}
window.addEventListener("load", doFirst, false);