import React, { useState, useEffect } from 'react';
import './Formation.css';
import FormationInput from './FormationInput';
import Field from './Field';
import PositionPlayer from './PositionPlayer';

const Formation = (props) =>{
    let[formation,setFormation] = useState({});
    let[formationPlainText,setFormationPlainText] = useState({formation:""});

    useEffect(()=>{
      updateFormation(props.formation.formation)
    },[props.formation]);

    const updateFormation = (formationInput) =>{
      let formationPostions = formationInput.split("-");

      setFormation({attack:Number(formationPostions[2]),
        middle:Number(formationPostions[1]),
        defense:Number(formationPostions[0])});

      setFormationPlainText({formation:formationInput});
    }

    const inputFormationHandler = (event) =>{
        updateFormation(event)
    }

    const saveTeamFormation = ()=>{
      props.saveTeamFormation(formationPlainText.formation);
    }

    return(
      <div className="configure-squad__wrapper">
          <div className="configure-squad__wrapper-div">
            <div className="configure-squad__layout">
            <FormationInput 
            formation={props.formation} 
            formationHandler={inputFormationHandler}
            saveTeamFormation={saveTeamFormation} />

            <Field formation={formation} />

            <button onClick={saveTeamFormation}>Save</button>
            </div>
          </div>
      </div>
    )
}

export default Formation;