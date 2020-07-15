import React from 'react';
import './TeamTableData.css';
import Icons from './icons/Icons';

const TeamTableData = (props) =>{
    const deleteTeam = (event) =>{
        props.deleteTeam(event);
    }

    const editTeam = (id) =>{
        props.editTeam(id);
    }

    return(
        <tr>
            <td>{props.name}</td>
            <td className="teamtabledata__desc-with-icons">
                {props.description}
                <Icons 
                teamId={props.teamId}
                deleteTeam={deleteTeam}
                editTeam={editTeam}
                />
            </td>
        </tr>
    )
}

export default TeamTableData;