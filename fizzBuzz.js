var Output=[];
var call = 1;
function fizzBuzz(){
    if(call%3==0 && call%5==0){
        Output.push("fizzBuzz");
    }
    else if(call%3!==0 && call%5==0){
        Output.push("buzz");
        
    }
    else if(call%5!==0 && call%3==0){
        Output.push("fizz");
    }
    else {
        Output.push(call);
        
    }
    call++;
    console.log(Output);
}