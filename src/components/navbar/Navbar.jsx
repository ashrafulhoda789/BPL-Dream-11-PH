import React from 'react';
import dollarImg from '../../assets/dollar-1.png'

const Navbar = ({coin}) => {
    return (
        <div className=''>
            <div className="navbar bg-base-100 shadow-sm container mx-auto">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="flex-none">
                    <button className="flex justify-between items-center gap-2 font-semibold text-[16px">
                        {coin} coins
                        <img src={dollarImg} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;