import React from 'react';
import './TopTeam.css';

const TopTeam = (props) =>{
    return(
        <div className="d-flex justify-content-around w-100 topteam__wrapper w-100">
            <div>
                {props.name}
            </div>
            <div>
                {props.avg}
            </div>
        </div>
    )
}

export default TopTeam;