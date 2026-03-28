import { Trash, User } from 'lucide-react';
import React from 'react';

const SelectedPlayers = ({ setSelectedPlayers, selectedPlayers, coin, setCoin }) => {
    // console.log(selectedPlayers);
    const handleDeleteSelectedPlayer = (player) =>{
        const filterPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.PlayerName !== player.PlayerName);
        // console.log(filterPlayers);
        setSelectedPlayers(filterPlayers);

        let addCoin = coin + player.Price;
        setCoin(addCoin);
    }
    return (
        <div>
            <div className='space-y-5'>
                { selectedPlayers.length === 0 ? 
                    <div className='h-100 flex flex-col justify-center items-center gap-4'>
                        <h2 className='font-semibold text-xl'>No players Selected yet</h2>
                        <p className='font-medium'>Go toAvailable tab to select players </p>
                    </div>
                    : selectedPlayers.map((player, index) => {
                        return (
                            <div key={index} className='flex items-center justify-between p-4 rounded-2xl border'>
                                <div className='flex items-center gap-6'>
                                    <img src={player.PlayerImg} alt="" className='h-15 w-auto rounded-md border border-gray-300' />
                                    <div className=''>
                                        <h2 className='flex items-center gap-2 font-bold text-xl'><User></User> {player.PlayerName}</h2>
                                        <p>{player.PlayerType}</p>
                                    </div>
                                </div>
                                <button
                                onClick={()=> handleDeleteSelectedPlayer(player)}
                                className='btn text-red-500'><Trash></Trash></button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default SelectedPlayers;