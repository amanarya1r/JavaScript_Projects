const prompt = require("prompt-sync")();
const name = prompt("What is your name? ");
console.log("Hello", name, ". Let's play the game!");

const letsPlay = prompt("Do you want to play? ");

if(letsPlay.toLowerCase() === "yes"){
   const leftRight = prompt("You enter a maze, do you want to go left or right? ");
   if (leftRight.toLowerCase() === "left"){
        console.log("You go left and see a bridge...");
        const cross = prompt("Do you want to cross the bridge? ");
        if(cross.toLowerCase() === "yes"){
            console.log("You cross the bridge and bridge collapse but you survive");
            const deep = prompt ("Would like to go deep in the jungle? ");
            if (deep.toLowerCase() === "yes"){
                console.log("You find a man eating tiger and you become his prey");
            } else {
                console.log("Whatever you have typed but you survive the choas you are saved!");
            }
        } else if(cross.toLowerCase() === "no"){
            console.log("Good choice you have survive the choas...");
        } else {
            console.log("I don't understand what you just typed so byee");
            exit();
        }
   } else {
        console.log("You go right and died to bear attack");
   }
} else if(letsPlay.toLowerCase() === "no"){
    console.log("Okay ☹️");
} else {
    console.log("Invalid input...");
}