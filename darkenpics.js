document.body.style.border = "5px solid red";

document.getElementsByTagName("img")[0].style.filter = "grayscale(100%)";

function myFunction(){
var elems = document.getElementsByTagName("img");
for (var i = 0; i < elems.length; i+= 1) {
 elems[i].style.filter = "grayscale(70%)";
 }
}

myFunction()

//document,body.addEventListener("load", myFunction());

