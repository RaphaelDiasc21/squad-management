import React, { useEffect, useState } from 'react';
import './Field.css';

import PositionPlayer from './PositionPlayer';

const Field = (props) =>{
    let[formation,setFormation] = useState({
        attack:0,
        middle:0,
        defense:0
    });

    const renderPosition = (qt,position) =>{
          return Array.from(Array(qt),(e,i)=>{
               return <PositionPlayer id={position+ " "+i}/>
          })
    }
    useEffect(()=>{
         setFormation({...props.formation})
    },[props.formation])

    return(
    <div className="field">
        <div className="field__area">
          {renderPosition(formation.attack,"attack")}
        </div>
        <div className="field__area">
          {renderPosition(formation.middle,"middle")}
        </div>
        <div className="field__area">
          {renderPosition(formation.defense,"defense")}
        </div>
        <div className="field__area">
             <PositionPlayer />
        </div>
    </div>
    )
}

export default Field;