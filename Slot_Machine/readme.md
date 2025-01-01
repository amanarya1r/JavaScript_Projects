## Slot Machine 🎰
Slot Machine is a js script which created on the simple logic, loops and conditional statement. The code can be further improved and new can features can be added. 

## How slot machine🎰 works? 
Every time script runs, user will be asked to enter a certain ammount, then user will be asked to bet on number of lines, then user will be asked to enter the nubmer of lines to bet on.
After that script will run in synchronus manner and slot matching will be done for if user win/loose, user would be asked if user want to play again if user write yes then same loop will happen again and if user write no then the user breaks the loop and exit the script.

**Here is how Slot Machine🎰 mechanism like:** 

| A | A | A | 
|---|---|---|
| B | B | A |
| C | C | A |
 
So there will be three rows, from one of which a user can win if there will be three symbols which matches in a row, otherwill not win if symbols mismatch. 

| ~~A~~ | ~~A~~ | ~~A~~ | 
|---|---|---|
| B | B | A |
| C | C | A |

So if a user bet on a row line for a certain ammount then it get multiplied as per the row line(suppose if 1 row line is selected than it would be multiplied for once, if two then it would be mutliplied for twice and if three then it would be multiplied for thrice).

This code will transpose the matrix:
```javascript
const transpose = (reels) => { //transposing of 2d array{matrix} done so that we can match the data easily

// [[A B C], [D D D], [A A A]]
// [A D A]
// [B D A]
// [C D A]

    const rows = [];

    for (let i = 0; i < ROWS; i++){
        rows.push([]); //a new row get pushed because for every single row an array is needed to represent it
        for (let j = 0; j < COLS; j++){
            rows[i].push(reels[j][i]); //j is column index and i is row index
        }
    }

    return rows;
}
```

And the rows and column get printed using this code:
```javascript
const printRows = (rows) => {
    for(const row of rows) {
        let rowString = ""; // A | B | D   <= this will look like this
        for (const [i, symbol] of row.entries()){
            rowString += symbol;
            if(i != row.length - 1){ //this will add pipe before starting and end of rowstring array
                rowString += " | ";
            }
        }
        console.log(rowString);
    }
}

```

**Here is how Slot Machine works:**

![YUY 2025-01-01 18 59 16](https://github.com/user-attachments/assets/036a3aa6-63a0-4066-a276-432e48c7fbce)
