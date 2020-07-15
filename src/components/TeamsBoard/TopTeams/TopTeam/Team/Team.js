import React from 'react';

const Team = (props) =>{
    return(
        <div className="team__wrapper">
            <div>
                <p>{props.name}</p>
            </div>
            <div>
                <p>{props.value}</p>
            </div>
        </div>
    )
}