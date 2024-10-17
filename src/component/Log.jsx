import React from 'react'
import useGameStore from '../zustand/useGameStore'

function Log({ turns }) {

  const { gameTurns } = useGameStore
  return (
    <div className='log'>
        <ol>
          { gameTurns.map(turn => (
            <li key ={`${turn.square.row} ${turn.square.col}`}>
              {turn.player} selected {turn.square.row},{turn.square.col}
            </li>
            ))}   
        </ol>
    </div>
  )
}

export default Log
