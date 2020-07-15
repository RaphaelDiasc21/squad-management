import React from 'react';
import Player from './Player/Player';

const SearchPlayer = () =>{
    return(
        <div className="configure-squad__wrapper">
            <div className="form-group">
                <label>Search Players</label>
                <input type="text" className="form-control" />
            </div>
            <div>
                <Player name="Ronaldo" age="22" nacionality="Brazil" />
            </div>
        </div>
    )
}

export default SearchPlayer;