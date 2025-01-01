const prompt = require("prompt-sync")();

const ROWS = 3; // all these variable are constant thats why they are written in capital leter
const COLS = 3;

const SYMBOLS_COUNT = {
    "A": 2, //A will appear twice in a slot wheel
    "B": 4, 
    "C": 6,
    "D": 8 //D will appear 8times in a slot wheel
}

const SYMBOLS_VALUES = { 
    "A": 5, //If line of A appear, the bet will multiplied with 5
    "B": 4, 
    "C": 3, //If line of C appear, the bet will multiplied with 3
    "D": 2
}

const deposit = () => {
    while (true){    
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if(isNaN(numberDepositAmount) || numberDepositAmount <= 0){
            console.log("Inavlid deposit amount, try again.");
        } else {
            return numberDepositAmount;
        }
    }
};

const getNumberOfLines = () => {
    while (true){
        const lines = prompt("Enter the number of lines to bet on (1-3): ");
        const numberOfLines = parseFloat(lines);

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){
            console.log("Invalid number of lines, try again.");
        } else {
            return numberOfLines;
        }
    }
};

//bet will be done on the basis of number of lines
const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter the bet per line: ");
        const numberBet = parseFloat(bet);

        if (isNaN(numberBet) || numberBet <= 0 || numberBet > (balance / lines)){
            console.log("Inavlid bet, try again.");
        } else {
            return numberBet;
        }
    }
};

const spin = () => { //its spining the slot whell[Randomly selecting SELECT_COUNT values on each wheel and stopping at a certain point]
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) { //symbol gives keys inside SYMBOLS_COUNT object and count will give values associated to there keys
        for (let i = 0; i < count; i++){
            symbols.push(symbol); //symbols from SYMBOLS_COUNT are added to symbols array
        }
    }
    const reels = [];
    for (let i = 0; i < COLS; i++){ //this will generate columns for slot machine wheel and it get generated for each reel
            reels.push([]);
            const reelSymbols = [...symbols]; //this will copy symbols we have available to choose from reels into array
            //using this because for every single slot wheel these are all the available symbols slot machine have
            // So the symbol get randomly selected and get removed from the available symbol for the individual wheel and this process continue

        for (let j = 0; j < ROWS; j++){ //this will pick 3 elements from number of rows slot machine have
            const randomIndex = Math.floor(Math.random()*reelSymbols.length); //randomIndex choosen randomly 
            //Math.random() will selecting between value 0 to 1.
            //Mathrandom()*reelSymbols.length maximus possible number would be how many symbols we have
            //Math.floor will round down
            const selectedSymbol = reelSymbols[randomIndex]; 
            reels[i].push(selectedSymbol); //selectedSymbol added 
            reelSymbols.splice(randomIndex, 1); //added symbol get removed from reelSymbols
        }
    }

    return reels;
};

const transpose = (reels) => { //transposing of 2d array{matrix} done so that we can match the data easily
    const rows = [];

    for (let i = 0; i < ROWS; i++){
        rows.push([]);
        for (let j = 0; j < COLS; j++){
            rows[i].push(reels[j][i]);
        }
    }

    return rows;
}

const printRows = (rows) => {
    for(const row of rows) {
        let rowString = "";
        for (const [i, symbol] of row.entries()){
            rowString += symbol;
            if(i != row.length - 1){
                rowString += " | ";
            }
        }
        console.log(rowString);
    }
}

const getWinnings = (rows, bet, lines) => {
    let winnings = 0;

    for (let row = 0; row < lines; row++){
        const symbols = rows[row];
        let allSame = true;

        for (const symbol of symbols){ //if symbols are not same in the slot machine 
            if (symbol != symbols[0]){
                allSame = false;
                break;
            }
        }

        if (allSame){ //if symbols are same in the slot machine
            winnings += bet * SYMBOLS_VALUES[symbols[0]];
        }
    }

    return winnings;
}

const game = () => { //game start by this function
    let balance = deposit();

    while (true){
        console.log("You have a balance of $" + balance);
        const numberOfLines = getNumberOfLines();
        const bet = getBet(balance, numberOfLines);
        balance -= bet * numberOfLines;
        const reels = spin();
        const rows = transpose(reels);
        console.log();
        printRows(rows);
        const winnings = getWinnings(rows, bet, numberOfLines);
        balance += winnings;
        console.log(`You won, $${winnings.toString()}`);
        console.log();
        if (balance <= 0){
            console.log("you ran out of money!");
            break;
        }

        const playAgain = prompt("Do you want to play again? (y/n)?: ");
        if (playAgain != "y"){
            break;
        }
        console.log();
    }
}

game();

