import { useState, useEffect } from 'react';
import './App.css';
import GameBoard from './component/GameBoard.jsx';
import Header from './component/Header.jsx';
import Player from './component/Player.jsx';
import Log from './component/Log.jsx';
import GameOver from './component/GameOver.jsx';
import useGameStore from './zustand/useGameStore.jsx';



function App() {

  const { gameTurns, addTurn, resetTurns } = useGameStore();

  function deriveActivePlayer(gameTurns) {
    let currentPlayer = 'X';
    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
      currentPlayer = 'O';
    }
    return currentPlayer;
  }


   const activePlayer = deriveActivePlayer(gameTurns);
  return (
    <div className="App">
      <Header />
      <div className='gameContainer'>
        <ol className='players'>
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        <div>
          <GameBoard/>
        </div>
      </div>
    </div>
  );
}

export default App;
