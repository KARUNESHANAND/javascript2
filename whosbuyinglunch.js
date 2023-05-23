var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
function whosPaying(names) {
    
/******Don't change the code above*******/
    
    //Write your code here.
    var arrayLength = names.length;
    var randomIndex = Math.floor(Math.random() * arrayLength);
    var item = names[randomIndex];
    return item + " is going to buy lunch today!";

/******Don't change the code below*******/    
}