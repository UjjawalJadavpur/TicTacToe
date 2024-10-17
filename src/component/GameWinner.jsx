import React from 'react';
import { WINNING_COMBINATIONS } from './WinningCombination.jsx';
import GameBoard from './GameBoard.jsx';

function GameWinner(gameBoard) {
    let winner;
    for (const combination of WINNING_COMBINATIONS){
        const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
        const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
        const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

        if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
            winner = firstSquareSymbol;
        }  
    }

    return (
        <div>
            {winner ? ( <p>{winner} won!</p> ) : ( <p>Draw!</p> )} 
        </div>
    )
}

export default GameWinner
