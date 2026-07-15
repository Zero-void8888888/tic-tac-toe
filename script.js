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
    let value  = "";

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




const display = (() => {
    const body = document.querySelector("body")
    body.id = "main";
    const parentDiv = document.createElement("div");
    parentDiv.id = "grid-container";
    document.body.appendChild(parentDiv);
    let activePlayerOne = true;
    const winningContainer = document.createElement("div");
    winningContainer.id = "winning";
    body.appendChild(winningContainer);


    
        




    const update = () => {
        
        parentDiv.replaceChildren();

        for(let row = 0; row < 3; row++){
            for(let column = 0; column < 3 ; column++){
                let childElement = document.createElement("div");
                childElement.classList.add("cell");
                childElement.textContent = board.getBoard()[row][column].getValue();
                childElement.addEventListener("click", () =>{
                if(game.gameOver !== true && board.getBoard()[row][column].getValue() === ""){
                    game.playRound(row,column);
                }

                });
                parentDiv.appendChild(childElement);
            }
    }  
}

const playerUpdate = () => {
    const playerOne = document.getElementById("player-one-circle");
    const playerTwo = document.getElementById("player-two-circle");
    console.log("LOL")
    console.log(playerOne);
    console.log(playerTwo);
    if(display.activePlayerOne === true){
        playerTwo.style.visibility = "hidden";
        playerOne.style.visibility = "visible";
        console.log("Ok")
    }
    else if (display.activePlayerOne === false){
        playerOne.style.visibility = "hidden";
        playerTwo.style.visibility = "visible";
        console.log("ok buddy")
    }
}


//create some for the winning screen
    const winningUpdate = () => {
        console.log("bruh bruh")
        parentDiv.replaceChildren();
        console.log("bruh b b b");
        for( let row = 0; row<3; row++){
            console.log("bruh b  b b b ");
            for(let column = 0; column<3; column++){
                
                //diagnal
            if( row == 0 && column == 2 || row == 1 && column == 1 || row == 2 && column == 0  ){
                if(board.getBoard()[0][2].getValue() == "x" &&  board.getBoard()[1][1].getValue() == "x" && board.getBoard()[2][0].getValue() =="x"){
                    let childElement = document.createElement("div");
                    childElement.classList.add("winningCellPlayerOne");
                    childElement.textContent = board.getBoard()[row][column].getValue(); 
                    parentDiv.appendChild(childElement);
                    continue;
                }
                else if (board.getBoard()[0][2].getValue() == "o" &&  board.getBoard()[1][1].getValue() == "o" && board.getBoard()[2][0].getValue() =="o"){
                    let childElement = document.createElement("div");
                    childElement.classList.add("winningCellPlayerTwo");
                    childElement.textContent = board.getBoard()[row][column].getValue(); 
                    parentDiv.appendChild(childElement);
                    continue;
                }
            }
                //reverse diag  nal
            if(row == 0 && column == 0 || row == 1 && column == 1 || row == 2 && column == 2){
                if(board.getBoard()[0][0].getValue() == "x" &&  board.getBoard()[1][1].getValue() == "x" && board.getBoard()[2][2].getValue() =="x"){
                    let childElement = document.createElement("div");
                    childElement.classList.add("winningCellPlayerOne");
                    childElement.textContent = board.getBoard()[row][column].getValue(); 
                    parentDiv.appendChild(childElement);
                    console.log("oooo")
                    continue;
                }
                else if (board.getBoard()[0][0].getValue() == "o" &&  board.getBoard()[1][1].getValue() == "o" && board.getBoard()[2][2].getValue() =="o"){
                    let childElement = document.createElement("div");
                    childElement.classList.add("winningCellPlayerTwo");
                    childElement.textContent = board.getBoard()[row][column].getValue(); 
                    parentDiv.appendChild(childElement);
                    continue;
                }
            }
                //row1
            if(row == 0 && column == 0 || row == 0 && column == 1 || row == 0 && column == 2){
                if(board.getBoard()[0][0].getValue() == "x" &&  board.getBoard()[0][1].getValue() == "x" && board.getBoard()[0][2].getValue() =="x"){
                    let childElement = document.createElement("div");
                    childElement.classList.add("winningCellPlayerOne");
                    childElement.textContent = board.getBoard()[row][column].getValue(); 
                    parentDiv.appendChild(childElement);
                    continue;
                }
                else if (board.getBoard()[0][0].getValue() == "o" &&  board.getBoard()[0][1].getValue() == "o" && board.getBoard()[0][2].getValue() =="o"){
                    let childElement = document.createElement("div");
                    childElement.classList.add("winningCellPlayerTwo");
                    childElement.textContent = board.getBoard()[row][column].getValue(); 
                    parentDiv.appendChild(childElement);
                    continue;
                }
            }
                //row2
            if(row == 1 && column == 0 || row == 1 && column == 1 || row == 1 && column == 2){
                if(board.getBoard()[1][0].getValue() == "x" &&  board.getBoard()[1][1].getValue() == "x" && board.getBoard()[1][2].getValue() =="x"){
                    let childElement = document.createElement("div");
                    childElement.classList.add("winningCellPlayerOne");
                    childElement.textContent = board.getBoard()[row][column].getValue();
                    parentDiv.appendChild(childElement); 
                    continue;
                }
                else if (board.getBoard()[1][0].getValue() == "o" &&  board.getBoard()[1][1].getValue() == "o" && board.getBoard()[1][2].getValue() =="o"){
                    let childElement = document.createElement("div");
                    childElement.classList.add("winningCellPlayerTwo");
                    childElement.textContent = board.getBoard()[row][column].getValue(); 
                    parentDiv.appendChild(childElement);
                    continue;
                }
            }
            if(row == 2 && column == 0 || row == 2 && column == 1 || row == 2 && column == 2){
                //row3
                if(board.getBoard()[2][0].getValue() == "x" &&  board.getBoard()[2][1].getValue() == "x" && board.getBoard()[2][2].getValue() =="x"){
                    let childElement = document.createElement("div");
                    childElement.classList.add("winningCellPlayerOne");
                    childElement.textContent = board.getBoard()[row][column].getValue(); 
                    parentDiv.appendChild(childElement);
                    continue;
                }
                else if (board.getBoard()[2][0].getValue() == "o" &&  board.getBoard()[2][1].getValue() == "o" && board.getBoard()[2][2].getValue() =="o"){
                    let childElement = document.createElement("div");
                    childElement.classList.add("winningCellPlayerTwo");
                    childElement.textContent = board.getBoard()[row][column].getValue(); 
                    parentDiv.appendChild(childElement);
                    continue;
                }
            }
            if(row == 0 && column == 0 || row == 1 && column == 0 || row == 2 && column == 0){
                //column 1
                if(board.getBoard()[0][0].getValue() == "x" &&  board.getBoard()[1][0].getValue() == "x" && board.getBoard()[2][0].getValue() =="x"){
                    let childElement = document.createElement("div");
                    childElement.classList.add("winningCellPlayerOne");
                    childElement.textContent = board.getBoard()[row][column].getValue(); 
                    parentDiv.appendChild(childElement);
                    continue;
                }
                else if (board.getBoard()[0][0].getValue() == "o" &&  board.getBoard()[1][0].getValue() == "o" && board.getBoard()[2][0].getValue() =="o"){
                    let childElement = document.createElement("div");
                    childElement.classList.add("winningCellPlayerTwo");
                    childElement.textContent = board.getBoard()[row][column].getValue(); 
                    parentDiv.appendChild(childElement);
                    continue;
                }
            }
            if( row == 0 && column == 1 || row == 1 && column == 1 || row == 2 && column == 1){
                //column 2 
                if(board.getBoard()[0][1].getValue() == "x" &&  board.getBoard()[1][1].getValue() == "x" && board.getBoard()[2][1].getValue() =="x"){
                    let childElement = document.createElement("div");
                    childElement.classList.add("winningCellPlayerOne");
                    childElement.textContent = board.getBoard()[row][column].getValue(); 
                    parentDiv.appendChild(childElement);
                    continue;
                }
                else if (board.getBoard()[0][1].getValue() == "o" &&  board.getBoard()[1][1].getValue() == "o" && board.getBoard()[2][1].getValue() =="o"){
                    let childElement = document.createElement("div");
                    childElement.classList.add("winningCellPlayerTwo");
                    childElement.textContent = board.getBoard()[row][column].getValue(); 
                    parentDiv.appendChild(childElement);
                    continue;
                }
            }
            if(row == 0 && column == 2 || row == 1 && column == 2 || row == 2 && column == 2){
                //column 3
                if(board.getBoard()[0][2].getValue() == "x" &&  board.getBoard()[1][2].getValue() == "x" && board.getBoard()[2][2].getValue() =="x"){
                    let childElement = document.createElement("div");
                    childElement.classList.add("winningCellPlayerOne");
                    childElement.textContent = board.getBoard()[row][column].getValue(); 
                    parentDiv.appendChild(childElement);
                    continue;
                }
                else if (board.getBoard()[0][2].getValue() == "o" &&  board.getBoard()[1][2].getValue() == "o" && board.getBoard()[2][2].getValue() =="o"){
                    let childElement = document.createElement("div");
                    childElement.classList.add("winningCellPlayerTwo");
                    childElement.textContent = board.getBoard()[row][column].getValue(); 
                    parentDiv.appendChild(childElement);
                    continue;
                }
            }

                
                
                


                


              
              let childElement = document.createElement("div");
              childElement.classList.add("cell");
              childElement.textContent = board.getBoard()[row][column].getValue();
              parentDiv.appendChild(childElement); 
            }
        }
    }
    //add something that makes it visible or not
    const reset = ( player, gameOver) => {
       if(gameOver == false){
        console.log("i ran mf");
            winningContainer.style.visibility = "hidden";

       }
       else{
        
        let text = winningContainer.textContent = `${player}  wins`;
        const buttonContainer = document.createElement("div");
        buttonContainer.id = "buttonContainer";
        winningContainer.appendChild(buttonContainer);
        let button = document.createElement("button");
        button.textContent = "rematch";
        button.id = "button";
        buttonContainer.appendChild(button);
        button.addEventListener("click",() => {
            board.getBoard().map((row) => row.map((cell) => cell.addMark("")));
            display.update()
            reset("",false )
        })

        winningContainer.style.visibility = "visible";
        
    }
    }

return{ update, playerUpdate, activePlayerOne, winningUpdate, reset };


}
)();
















const game = ((playerOneName = "Player One", playerTwoName = "Player Two") => {
    
    let gameOver = false;
    const players = [{
        name: playerOneName,
        token:"x"

    },{
        name: playerTwoName,
        token:"o"
    }];

    let activePlayer = players[0];

    const switchPlayerTurn = () => {
        
        display.activePlayerOne = display.activePlayerOne === true ? false:  true;
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
        
}

    const getActivePlayer = () => {
        return activePlayer;
    }

    const printNewRound = () => {
        board.printBoard();
        
        display.update();
        display.playerUpdate();
        
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
        if(board.getBoard()[row][column].getValue() === ""){
            board.markSquare(row,column,getActivePlayer().token);
            
        }
        

        //implement logic for winning 
        // create logic for single rows

        const rowsWithXS = board.getBoard().filter( (row) => row.filter( (cell) => cell.getValue() === "x").length === 3)
        if(rowsWithXS.length === 1){
            console.log(`${ getActivePlayer().name} you win`)
            console.log("row win")
            board.printBoard();
            display.winningUpdate();
            game.gameOver = true;
            display.reset(game.getActivePlayer().name,game.gameOver);
            game.gameOver = false;
            
            
            return;
        }

        const rowsWithOS = board.getBoard().filter( (row) => row.filter( (cell) => cell.getValue() === "o").length === 3)
        if(rowsWithOS.length === 1){
            console.log(`${ getActivePlayer().name} you win`)
            console.log("row win")
            board.printBoard();
            display.winningUpdate();
            game.gameOver = true;
            display.reset(game.getActivePlayer().name,game.gameOver);
            game.gameOver = false;
            switchPlayerTurn();
            display.playerUpdate();
            return;
        }


        const columnsWithXS = board.getBoard().filter( (row) => row[column].getValue() === "x"  );
        if(columnsWithXS.length === 3){
            console.log(`${ getActivePlayer().name} you win`);
            console.log("col win");
            board.printBoard();
            display.winningUpdate();
            game.gameOver = true;
            display.reset(game.getActivePlayer().name,game.gameOver);
            game.gameOver = false;
            
            return
        }

        const columnsWithOS = board.getBoard().filter( (row) => row[column].getValue() === "o"  );
        if(columnsWithOS.length === 3){
            console.log(`${ getActivePlayer().name} you win`);
            console.log("col win");
            board.printBoard();
            display.winningUpdate();
            game.gameOver = true;
            display.reset(game.getActivePlayer().name,game.gameOver);
            game.gameOver = false;
            switchPlayerTurn();
            display.playerUpdate();
            return
        }

        let counterX = 0;
        const diagnalsWithXS = board.getBoard().filter((row) => row[counterX++].getValue() === "x" );
        

        if(diagnalsWithXS.length === 3){
            console.log(`${ getActivePlayer().name} you win`);
            console.log("diagnal win");
            board.printBoard();
            display.winningUpdate();
            console.log("bruh")
            game.gameOver = true;
            display.reset(game.getActivePlayer().name,game.gameOver);
            game.gameOver = false;
            
            return
        }

        let counterO = 0;
        const diagnalsWithOS = board.getBoard().filter((row) => row[counterO++].getValue() === "o" );
        

        if(diagnalsWithOS.length === 3){
            console.log(`${ getActivePlayer().name} you win`);
            console.log("diagnal win");
            board.printBoard();
            display.winningUpdate();
            game.gameOver = true;
            display.reset(game.getActivePlayer().name,game.gameOver);
            game.gameOver = false;
            switchPlayerTurn();
            display.playerUpdate();
            return
        }

        let counter2X = 2;
        const diagnalsWithXS2 = board.getBoard().filter((row) => row[counter2X--].getValue() === "x" );
        

        if(diagnalsWithXS2.length === 3){
            console.log(`${ getActivePlayer().name} you win`);
            console.log("diagnal win b");
            board.printBoard();
            display.winningUpdate();
            game.gameOver = true;
            display.reset(game.getActivePlayer().name,game.gameOver);
            game.gameOver = false;
           
            return
        }

        let counter2O = 2;
        const diagnalsWithOS2 = board.getBoard().filter((row) => row[counter2O--].getValue() === "o" );
        

        if(diagnalsWithOS2.length === 3){
            console.log(`${ getActivePlayer().name} you win`);
            console.log("diagnal win b");
            board.printBoard();
            display.winningUpdate();
            game.gameOver = true;
            display.reset(game.getActivePlayer().name,game.gameOver);
            game.gameOver = false;
            switchPlayerTurn();
            display.playerUpdate();
            return
        }

        const boardWithCellValues = board.getBoard().map((row) => row.map( (cell) => cell.getValue()));

        const drawCells= boardWithCellValues.filter((row) => row.filter((cell) => cell === "x"||cell === "o").length === 3);

        if(drawCells.length === 3 ){
            console.log("Draw ");
            board.printBoard();
            display.update();
            game.gameOver = true;
            display.reset("no one",game.gameOver);
            game.gameOver = false;
            return;
        }




        //try to make sure if a place is marked, it can't be marked again.


        switchPlayerTurn();
        printNewRound();
    }

    printNewRound();
    display.reset("no one", gameOver);
    

    return{
        playRound,
        getActivePlayer,
        gameOver,
        players
        
    }

})();


















