
import React from 'react';
import Player from '../../../../ui/Player';

const AvailablePlayers = ({ players }) => {
    console.log(players);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2'>

            {
                players.map((player, index) => <Player key={index} player={player}></Player>)
            }

            
        </div>
    );
};

export default AvailablePlayers;