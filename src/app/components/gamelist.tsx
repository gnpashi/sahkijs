import React from 'react'
import Game from "./game";

export default function gamelist({ games }) {
  return (
    <div className='p-2'>
        {games.map((game, index) => (
            <Game game={game} key={index} />
        ))}
    </div>
  )
}
