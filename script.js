 const board =(() => {
    const row = 3;
    const column = 3;
    const board = [];
    for(let i = 0; i < row; i++){
        board[i] = [];
        for( let j = 0; j < column; j++){
            board[i].push(Cell());
        };
    };

    const getBoard = () => board;


    const markSquare = (row , column, player) => {
        // we should want to acess any square and have the whole board acessible
        //no need to restrict it by column
        board[row][column].addMark(player);


    }

    const printBoard = () => {
        const boardWithCellValues = board.map((row) =>row.map( (cell) => cell.getValue()));

        console.log(boardWithCellValues);

    }

    return{getBoard, markSquare, printBoard}
    
})();

function Cell(){
    let value = 0;

    const addMark = (player) => {
        value = player;
    }

    const getValue = () => {
        return value;
    }

    return {
        addMark,
        getValue
    }

}

const game = ((playerOneName = "Player One", playerTwoName = "Player Two") => {
    

    const players = [{
        name: playerOneName,
        token:"x"

    },{
        name: playerTwoName,
        token:"o"
    }];

    let activePlayer = players[0];

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
}

    const getActivePlayer = () => {
        return activePlayer;
    }

    const printNewRound = () => {
        board.printBoard();
        console.log(`choose a square ${getActivePlayer().name}`);
    }

    /* const getChoice = () {
        some scan or method to ask for user input
        some condition to check for the inout to be x or o
        if(input.charAt(0) !== "x" || charAt(0) !== "o"){
            if(if input is x){
            }

            else{

            }
            _
        }
        store the input in a varibale  like player[0].token and set the player[]1
    }*/

    const playRound = (row, column) => {
        console.log(`${getActivePlayer().name} marks row ${row} and ${column}`)
        if(board.getBoard()[row][column].getValue() === 0){
            board.markSquare(row,column,getActivePlayer().token);
        }
        

        //implement logic for winning 
        // create logic for single rows

        const rowsWithXS = board.getBoard().filter( (row) => row.filter( (cell) => cell.getValue() === "x").length === 3)
        if(rowsWithXS.length === 1){
            console.log(`${ getActivePlayer().name} you win`)
            board.printBoard();
            return;
        }


        const columnsWithXS = board.getBoard().filter( (row) => row[column].getValue() === "x"  );
        if(columnsWithXS.length === 3){
            console.log(`${ getActivePlayer().name} you win`);
            board.printBoard();
            return
        }

        let counter = 0;
        const diagnalsWithXS = board.getBoard().filter((row) => row[counter++].getValue() === "x" );
        

        if(diagnalsWithXS.length === 3){
            console.log(`${ getActivePlayer().name} you win`);
            board.printBoard();
            return
        }

        let counter2 = 2;
        const diagnalsWithXS2 = board.getBoard().filter((row) => row[counter2--].getValue() === "x" );
        

        if(diagnalsWithXS2.length === 3){
            console.log(`${ getActivePlayer().name} you win`);
            board.printBoard();
            return
        }

        const boardWithCellValues = board.getBoard().map((row) => row.map( (cell) => cell.getValue()));

        const drawCells= boardWithCellValues.filter((row) => row.filter((cell) => cell === "x"||cell === "o").length === 3);

        if(drawCells.length === 3 ){
            console.log("Draw ");
            board.printBoard();
            return;
        }




        //try to make sure if a place is marked, it can't be marked again.


        switchPlayerTurn();
        printNewRound();
    }

    printNewRound();

    return{
        playRound,
        getActivePlayer
    }

})();



game.playRound(0,0);
game.playRound(0,1);
game.playRound(0,2);
game.playRound(1,1);
game.playRound(1,0);
game.playRound(1,2);
game.playRound(2,2);
game.playRound(2,0);
game.playRound(2,1);








