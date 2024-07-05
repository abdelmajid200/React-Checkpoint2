import React from 'react';
import './DataDisplay.css'
function Player({ players }) {
  return (
    <div cards>
    {players.map((player) => (
      <div  className="player">
        <img src={player.image} alt={''} />
        <h2>{player.first_name} {player.last_name}</h2>
        <p>Team:{player.team}</p>
        <p>Position: {player.position}</p>
      </div>
    )
  )
    }
  </div>
  );
}

export default Player;
