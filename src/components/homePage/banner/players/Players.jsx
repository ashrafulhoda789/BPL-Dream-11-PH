import React, { use, useState } from 'react';
import AvailablePlayers from './availablePlayers/AvailablePlayers';
import SelectedPlayers from './selectedPlayers/SelectedPlayers';

const Players = ({ playerPromise, setCoin, coin, selectedPlayers, setSelectedPlayers }) => {
    // console.log(playerPromise);
    const players = use(playerPromise);
    // console.log(data);

    const [selectedType, setSelectedType] = useState("available");

    return (
        <div className='container mx-auto my-15'>

            <div className='flex justify-between items-center mb-5'>
                {selectedType === "available" ? <h2 className='font-bold text-2xl'>Available Players</h2> : <h2 className='font-bold text-2xl'>Selected Players ({selectedPlayers.length}/{players.length}) </h2>}
                <div>
                    <button
                        onClick={() => setSelectedType("available")}
                        className={`btn ${selectedType === "available" ? "bg-[#E7FE29]" : ""}  rounded-r-none rounded-l-xl`}>Available</button>
                    <button
                        onClick={() => setSelectedType("selected")}
                        className={`btn ${selectedType === "selected" ? "bg-[#E7FE29]" : ""}  rounded-l-none rounded-r-xl`}>Selected ({selectedPlayers.length}) </button>
                </div>
            </div>


            {selectedType === "available" ? <AvailablePlayers
                setCoin={setCoin} coin={coin}
                selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}
                players={players}></AvailablePlayers> : <SelectedPlayers setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers}
                coin={coin} setCoin={setCoin}
                ></SelectedPlayers>}
        </div>
    );
};

export default Players;