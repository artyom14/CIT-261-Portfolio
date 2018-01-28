// JavaScript source code

//Declare new object as XMLHttpRequest().
var xmlhttp = new XMLHttpRequest();

//Declare string object for 'server' text data .txt file
var url = "httpRequestData.txt";

/*When the readystate attribute changes, the onreadystatechange event handler
  Syntax: XMLHttpRequest.onreadystatechange = callback;
          callback is the function() that is executed when the readyState event is triggered*/
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        //use JSON.parse to store server data into local array 'myArr'
        var myArr = JSON.parse(this.responseText);
        //pass myArr containing text data parsed by JSON to myFunction
        myFunction(myArr);
    }
};
//.open methods: GET (obtain data) and POST (send data)
//second parameter is the url or location of the data
//last parameter determines the connection to be asynchronous (true) or synchronous (false)
xmlhttp.open("GET", url, true);
//.send data location request for information; used with the GET
xmlhttp.send();

//myFunction converts array with server text converted with JSON.parse into a text for html
function myFunction(arr) {
    var out = "";
    let i;
    //loop though the array and load each URL and SCRIPTURE into a string variable
    for (i = 0; i < arr.length; i++) {
        out += '<a href="' + arr[i].url + '">' +
            arr[i].scripture + '</a><br>';
    }
    //JavaScript will set html id: favScripts, to the string value in 'out'
    document.getElementById("favScripts").innerHTML = out;
}