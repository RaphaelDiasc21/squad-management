import React from 'react';
import './Player.css';

const Player = (props) =>{
    const dragPlayer = (event)=>{
        setTimeout(()=>{
            event.preventDefault();
        },0);
    
        event.dataTransfer.setData("player_id",event.target.id);
        event.dataTransfer.setData("player_name",props.name);
    }

    return(
        <div className="player__card d-flex flex-sm-colum flex-md-row p-3" onDragStart={dragPlayer} draggable="true" id="1">
            <div className="row w-100">
            <div className="col-sm-12 col-md-6">
                <p>
                    <span className="player__card--info-label">
                        Name:
                    </span>
                    <span className="player__card--info" id={"name "+props.name}>{props.name}</span>
                </p>
            </div>
            <div className="col-sm-12 col-md-6">
                <p>
                    <span className="player__card--info-label">
                        Age:
                    </span>
                    <span className="player__card--info">{props.age}</span>
                </p>
            </div>
            <div className="col-sm-12 col-md-6">
                <p>
                    <span className="player__card--info-label">
                        Nacionality:
                    </span>
                    <span className="player__card--info">{props.nacionality}</span>
                </p>
            </div>
            </div>
        </div>
    )
}

export default Player;