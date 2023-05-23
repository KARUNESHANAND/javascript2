var name = prompt("What is your name?");
var guestList = ["jelly", "pditi" , "airiti" , "shshi", "sksha" , "sidehi", "ane"];
if (guestList.includes(name)==true) {
    alert("Welcome to the party!");
}
else if(name=="Karunesh"){
    alert("This is your party!");
}
else {
    alert("Sorry next time!");
}
