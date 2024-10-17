import React, { useState } from 'react'
import useGameStore from '../zustand/useGameStore';
import GameOver from './GameOver';

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];


function GameBoard() {

    const { gameTurns, addTurn } = useGameStore();

    let gameBoard = [...initialGameBoard.map(array => [...array])];
    // let gameBoard = JSON.parse(JSON.stringify(initialGameBoard));

    for (const turn of gameTurns) {
        const { square, player } = turn;
        const { row, col } = square;
        gameBoard[row][col] = player;
    }

    function deriveActivePlayer(gameTurns) {
        let currentPlayer = 'X';
        if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
          currentPlayer = 'O';
        }
        return currentPlayer;
    }

    function handleSelectSquare(rowIndex, colIndex) {
        const currentPlayer = deriveActivePlayer(gameTurns);
        const newTurn = { square: { row: rowIndex, col: colIndex }, player: currentPlayer };
        addTurn(newTurn); 
    }

    return (
        <div className='gameBoard'>
            {gameBoard.map((row, rowIndex) => (
                row.map((playerSymbol, colIndex) => (
                    <button key={`${rowIndex}-${colIndex}`}
                        className='square'
                        onClick={() => handleSelectSquare(rowIndex, colIndex)}
                        disabled = {playerSymbol !== null} 
                        >
                        {playerSymbol}
                    </button>
                    
                ))
            ))}
            <GameOver gameBoard={gameBoard} />
        </div>
    );
}

export default GameBoard
