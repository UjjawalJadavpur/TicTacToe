import React, { useState } from 'react'

function Player({initialName, symbol, isActive}) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setplayerName] = useState(initialName)

    function handleEditClick(){
        setIsEditing((isEditing) => !isEditing);
    }

    function handleChange(event){
        console.log(event);
       setplayerName(event.target.value);
    }

    let editPlayerName = <span className='playerName'>{playerName}</span>;
    if(isEditing)
        editPlayerName = <input type='text' required value={playerName} onChange={handleChange} />;

    return (
     <div>
        <li className={isActive ? 'active' : ''}>
          <span className='player'>
            {editPlayerName}
            <span className='playerSymbol'>{symbol}</span>
          </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
     </div>
    )
}

export default Player
