var  event = document.getElementById("btn");
event.addEventListener("mouseover", firstFunction);
event.addEventListener("click", secondFunction);
event.addEventListener("mouseout", thirdFunction);

function firstFunction(){
    document.getElementById("para").innerHTML += "hey! <br>";
}
function secondFunction(){
    document.getElementById("para").innerHTML += "cool <br>";
}
function thirdFunction(){
    document.getElementById("para").innerHTML += " super hurray !!<br>";
}
