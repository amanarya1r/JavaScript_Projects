const prompt = require("prompt-sync")();
const fs = require("fs");

let ansarray = []; 
let k = 1;
function loadQustns() {
    //try => it attempt to run a block of code if it fails its error can be handle 
    //basically code with unrealibility should be runned using try
    try {
        const data = fs.readFileSync("qustns.json" ,"utf8"); 
        //utf8 is formatting(encoding) of json file, utf8 is mentioned so that js will know how to take out the data
        const questions = JSON.parse(data).questions;
        return questions;
    } catch (e) {
        console.log("Error occured loading file", e);
        return [];
    }
}

function getRndmQustns(questions, numQustns) {
    if (numQustns > questions.length){
        numQustns = questions.length;
    }

    //sort compare two value with each other e.g a and b
    //if this return +ve no then a > b or if -ve then a < b or if 0 then a = b 
    //the only difference is that sorting happening randomly
    const shuffled = questions.sort(() => {
        return 0.5 - Math.random(); 
        //order can be descending from ascending if we change the position of above variable
        //Math.random() value can go from 0 to 1.
    })
    return shuffled.slice(0, numQustns); //slice gives the portion of an array
    //slicing 0, 3 gives first 3 elements
}

function askQustns (question) {
    console.log(`Q${k}. ${question.question}`);
    for (let i = 0; i < question.options.length; i++){ //to determine the question index
        const option = question.options[i];
        console.log(`${i + 1}. ${option}`);
    }
    k++;
    ansarray.push(question.answer);

    console.log();
    const choice = parseInt(prompt("Enter the number: "));
    console.log();
    
    if (isNaN(choice) || choice < 1 || choice > question.options.length) {
        console.log("Invalid! Incorrect choice.");
        return false;
    }

    const choiceValue = question.options[choice - 1];
    return choiceValue === question.answer;

}
const numQustns = parseInt(prompt("Enter the number of questions: ")); 
console.log();

const questions = loadQustns();
const rndmQustns = getRndmQustns(questions, numQustns);

let correct = 0;
const startTime = Date.now();

for (let question of rndmQustns){
    const isCorrect = askQustns(question);
    if(isCorrect){
        console.log();
        correct++;
    }
}

const totalTime = Date.now() - startTime;
console.log('Correct:', correct);
console.log('Time:', Math.round(totalTime / 1000) + "s");
console.log('Score:', Math.round((correct / numQustns) * 100) + "%")
console.log();
console.log("The correct answer where:");
for (i=0; i < ansarray.length; i++){
    console.log(`Q${i+1}. Ans: ${ansarray[i]}`);
}
console.log();