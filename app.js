var btnTranslate= document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputDiv= document.querySelector("#output");

var serverURL="";

function getTranslationURL(text){
    return  serverURL + "?" + "text=" + text
}

function errorHandler(error){
    console.log("error occured", error)
    alert("something went wrong with server! Try again after some time.")
}