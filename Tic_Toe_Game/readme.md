## Tic Toe Game 
This project is based on the nested if-else and loop condition where a two/one user can play Tic Toe game.
To determine the position of board multi-dimensional array has been used, which look like this:

```javascript
const board = [
    [" ", " ", " "], //this represents the row and there are 3 rows
    [" ", " ", " "], // " " these is empty string which are representing postion in our board so in a row there are 3 position
    [" ", " ", " "]
];
```
***
Now to axis the board, two position are needed to determine the row position and another for column.
E.g:
```javascript
board[0][2]; //first row-1, column-2
```
And just like that user has been asked to give number[user can give 1-3 only] for row and column separately. User given value get constantly checked via if-else condition.
The maximum number user can give value is 9 because there are only 9 slots. Also the turn get cycled between 'X' user and '0' user.
***
Every time when user give a value then tic toe board get updated and get printed in this manner;
```javascript
function printBoard(board){
    for (let i = 0; i < board.length; i++){ //by this a whole row (may 1, 2, 3 depending on the value of i) get choosen 
        const row = board[i];
        let rowString = "";
        for (let j = 0; j < row.length; j++){ //this will choose whole column(depending on the value of j). Remember that there are total of 3 rows and when j get compare to 1 row it runs for 3 times because because row length is 3.
        //Now outermost for-loop will run for 3 times and inner most for-loop run for 9 times in total.
            rowString += row[j];
            if (j !== row.length - 1){ //separator is only added in between the column not in the start/end of column
                rowString += " | "; //this get printed for column separtion
            }
        }
        console.log(rowString);
        if (i !== board.length - 1){ //same this as before separator added in between row not in the start/end of row [bord.length - 1 = 2] this will after column separation loop is done
            console.log("---------"); //this get printed for row separation
        }
    }
}
//The above code can be used without changing any value even if there are more elements in board multidimensional array.
```
***
Now to check whether the user between 'X' or '0' had won, a function checkin is implemented.
```javascript
function checkWin(board, turn){
    const lines = [
        [[0, 0], [0, 1], [0, 2]], //row 0
        [[1, 0], [1, 1], [1, 2]], //row 1
        [[2, 0], [2, 1], [2, 2]], //row 2
        [[0, 0], [1, 0], [2, 0]], //col 0
        [[0, 1], [1, 1], [2, 1]], //col 1
        [[0, 2], [1, 2], [2, 2]], //col 2
        [[0, 0], [1, 1], [2, 2]], //diag 1
        [[0, 2], [1, 1], [2, 0]] //diag 2
    ]
    for (let line of lines){ //looping between each of the lines
        let win = true;
        for (let pos of line){ //looping between elements inside the line [i.e. [0, 0]....[2, 1] etc]
            const [row, col] = pos; //assign first element to row, second element to column
            if(board[row][col] !== turn){ //if user current turn does not matches the current board row and col position in a given array, win assign to false and loop ends. This loop will go on for every element inside the lines array, if nothing matches with element inside the lines array we return win = false;
                win = false;
                break; 
            }
        }
        if (win) { //if user current turn matches of the of the element of lines then we return true.
            return true;
        }
    }
    return false; //loops ends win return is false because nothing match with the elements of lines
}
```
*** 
#### Here is the gameplay:
<div align="center">
<p>When game got tied;</p>
<img src="https://github.com/user-attachments/assets/a5d93e92-847c-4099-8ba6-8418c595bcea" alt="tie game">
<br><br>
<p>When game got won;</p>
<img src="https://github.com/user-attachments/assets/106e7566-78d1-4f5d-a06e-9099cfe6e9f9" alt="game won">
</div>
