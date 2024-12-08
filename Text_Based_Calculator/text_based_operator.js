const prompt = require("prompt-sync")()

console.log("Welcome to Calculator");
let result;
let valid = true;
let dig1;
let dig2;
let operator;

function validator(){
    function getDigit(digitString){
        while (true) {
            let digit = parseFloat(prompt("Enter Number " + digitString + ": "));
            if (isNaN(digit)){
                console.log("Invalid input");
            } else {
                return digit;
            }
        }
    }
    
    dig1 = getDigit("A");
    dig2 = getDigit("B");
    
    console.log("These are the valid signs'+, -, /, *, %'")
    while (true){
        operator = prompt("Enter Sign: ");
        if(!['+', '-', '/', '*', '%'].includes(operator)){
            console.log("Please enter a valid sing!");
        } else {
            break;
        }
    }
    
    // we can use result without initializing first
    // prompt gives back string this means that if i want to add two numbers then i have to convert to integer
    // you may get the right answer in the substraction, multiplication, division, etc but to always get the right answer its better to convert string into integers
    switch(operator) {
        case "+":
            result = dig1 + dig2;
            break;
        case "-":
            result = dig1 - dig2;
            break;
        case "*":
            result = dig1 * dig2;
            break;
        case "/":
            if (dig2 === 0){
                valid = false;
                console.log("Zero division error.");
            }
            result = dig1 / dig2;
            break;
        case "%":
            result = dig1 % dig2;
            break;
        default:
            console.log("Invalide sign!");
            valid=false;
            // break;
            //by the way break is not necessary in default of switch because by default switch will know to break or end in default statement
    }   
}

validator();

let trymore = 'n';
while(true){    
    if (trymore === 'y'){
        trymore = prompt("Would like to do more calculations? (y for yes / n for no): ");
        console.log("\n");
        if (trymore ==='n'){
            console.log("Have a nice day... \nBye!");
            break;
        } else {
            validator();
            trymore = 'n'
        }
    }

    if(valid || trymore === 'n'){
        console.log(dig1, operator, dig2, "=", result);
        trymore = 'y';
        continue;
    }
}



// let dig1;
// let dig2;
//NaN means not a number
// while(true){
//     dig1 = parseFloat(prompt("A: "));
//     if (isNaN(dig1)){
//         console.log("Invalid input");
//     } else {
//         break;
//     }
// }

// while(true){
//     dig2 = parseFloat(prompt("B: "));
//     if (isNaN(dig2)){
//         console.log("Invalid input");
//     } else {
//         break;
//     }
// }

// while(true){ //this is better there is another method which is more better than this
//     if (dig2 === undefined ){ //strict equality operator
//         dig1 = parseFloat(prompt("A: "));
//         if (isNaN(dig1)){
//             console.log("Invalid input");
//             continue;
//         }
//     }

//     dig2 = parseFloat(prompt("B: "));
//     if (isNaN(dig2)){
//         console.log("Invalid input");
//         continue;
//     } else {
//         break;
//     }
// }