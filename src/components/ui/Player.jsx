import { Flag, UserRound } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Player = ({ player, setCoin, coin, selectedPlayers, setSelectedPlayers }) => {
    const { PlayerImg, PlayerName, PlayerCountry, PlayerType, rating, BattingStyle, BowlingStyle, Price } = player;
    // console.log(player);

    const [isSelected, setIsSelected] = useState(false);

    const handleChoosePlayer = () =>{
        

        let newCoin = coin - Price;
        if(newCoin >= 0){
            setCoin(coin - Price);
        }
        else{
            toast.warn("Not enough coins to buy this player!");
            return;
        }

        toast.success(`${PlayerName} is selected`);

        setIsSelected(true);

        setSelectedPlayers([...selectedPlayers, player])
        
    }
    return (
        <div >
            <div className="card bg-base-100 shadow-lg">
                <figure>
                    <img className=' h-75 p-4 '
                        src={PlayerImg}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">  <UserRound></UserRound> {PlayerName}</h2>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-2 items-center'>
                            <Flag></Flag>
                            <p>{PlayerCountry}</p>
                        </div>

                        <button className='btn'>{PlayerType}</button>
                    </div>
                    <div className="divider"></div>

                    <h2 className='font-bold'>Rating: {rating}</h2>

                    <div className='flex justify-between font-bold'>
                        <p>{BattingStyle}</p>
                        <p className='text-right'>{BowlingStyle}</p>
                    </div>


                    <div className="card-actions justify-between items-center">
                        <p className='font-semibold'>Price: {Price}</p>
                        <button className="btn" onClick={() => handleChoosePlayer()} 
                        disabled={isSelected} >{isSelected ? "Selected" : "Choose Player"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;