import React, { useEffect, useState } from 'react';
import './FormationInput.css';
const FormationInput = (props) =>{

    let formations = [
        {formation:'3-4-3'},
        {formation:'4-3-3'}
    ];

    const formationInputHandle = (event) =>{
        props.formationHandler(event.target.value)
    }

    return(
        <div className="d-flex flex-row justify-content-start align-items-center">
            <label>Formation</label>
            <select className="form-control formation__input" onChange={(event)=> formationInputHandle(event)}>
                <option>{props.formation.formation}</option>
                {
                    formations.map(formation =>{
                       return <option value={formation.formation}>{formation.formation}</option>
                    })
                }
            </select>
        </div>
    )
}

export default FormationInput;