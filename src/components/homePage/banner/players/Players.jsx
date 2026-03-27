import React, { use } from 'react';

const Players = ({playerPromise}) => {
    // console.log(playerPromise);
    const data = use(playerPromise);
    console.log(data);
    return (
        <div>
           { data.length}
        </div>
    );
};

export default Players;