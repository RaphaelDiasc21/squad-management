import React from 'react';
import './PositionPlayer.css';

const PositionPlayer = (props) =>{
    const dropando = (event) =>{
        //Start the drag n drop functionality
        console.log(event)
        console.log(event.dataTransfer.getData("player_id"));
        console.log(event.dataTransfer.getData("player_name"));
    }

    const dragdentro = (event) =>{
        event.stopPropagation();
        event.preventDefault();
    }

    return(
        <div className="position__player"
        id={props.id}
        onDragOver={dragdentro}
        onDrop={dropando}
        ></div>
    )
}

export default PositionPlayer;