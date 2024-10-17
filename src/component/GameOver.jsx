import React from 'react';
import useGameStore from '../zustand/useGameStore';
import { WINNING_COMBINATIONS } from './WinningCombination';

function deriveWinner(gameBoard) {
    for (const combination of WINNING_COMBINATIONS) {
        const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
        const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
        const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

        if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
            return firstSquareSymbol; // X or O won
        }
    }

    // Check if the board is full
    const isBoardFull = gameBoard.every(row => row.every(square => square !== null));
    if (isBoardFull) {
        return 'Draw';
    }

    return null; // No winner yet, and board isn't full
}

function GameOver({ gameBoard }) {
    const { resetTurns, gameTurns } = useGameStore();

    const winner = deriveWinner(gameBoard);

    // Determine if the game has ended (either by win or by draw)
    const isGameOver = winner !== null || gameTurns.length === 9;

    function handleRestart() {
        resetTurns(); // Reset the game
    }

    if (!isGameOver) {
        return null; // Don't display anything if the game is not over
    }

    return (
        <div className="gameOverBox">
            <h2>Game Result!</h2>
            {winner === 'Draw' ? (
                <p>The game is a draw!</p>
            ) : (
                <p>{winner} won the game!</p>
            )}
            <button onClick={handleRestart}>Rematch</button>
        </div>
    );
}

export default GameOver;
