

function sayMyName(){
    console.log("A");
    console.log("R");
    console.log("U");
    console.log("N");
    console.log("E");
    console.log("S");
    console.log("H");
    

}

// sayMyName()

// function addtwoNumber(number1,number2){
//     console.log(number1+number2);
// }

function addtwoNumber(number1 ,number2){
     return number1+number2
}

// addtwoNumber(3,5)

function loginUserMessage (username){
    if(! undefined){
        console.log("username is required");
        return;
    }
    return ` ${username} just logged in!`
}
// console.log(loginUserMessage("Arunesh"))
// when the value is not passed in the parameter of login message the output is undefined not null 
console.log(loginUserMessage());// heere is the example of that thing 
