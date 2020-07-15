import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import TeamTableData from './TeamTableData/TeamTableData';
import './MyTeams.css';

const MyTeams = (props) =>{
    const history = useHistory();

    let[teams,setTeams] = useState([])

    useEffect(()=>{
        setTeams([...props.teams])
    },[props.teams]);
    
    const sortBy = (sortBy) =>{
        if(sortBy == "name"){
            return teams.sort(
                (a,b) =>{
                    if(a.name > b.name){
                        return 1;
                    }
    
                    if(a.name < b.name){
                        return -1;
                    }
    
                    return 0
                }
            )
        }

            return teams.sort(
                (a,b) =>{
                    if(a.description > b.description){
                        return 1;
                    }
    
                    if(a.description < b.description){
                        return -1;
                    }
    
                    return 0
                }
            )
    }

    const sortTeams = (event) =>{
       let sortedTeams = sortBy(event.target.id);
       console.log(sortedTeams);
       setTeams([...sortedTeams]);
    }

    const createTeam = () =>{
        history.push("/create-team");
    }
    
    const deleteTeam = (event) =>{
        props.deleteTeam(event);
    }

    const editTeam = (id) =>{
        props.editTeam(id);
    }

    const iterateTeams = ()=>{
        console.log(teams.length)
        if(teams.length > 0){
            return teams.map(team =>{
                return <TeamTableData
                        name={team.name}
                        description={team.description}
                        teamId={team.id}
                        deleteTeam={deleteTeam}
                        editTeam={editTeam} />
            })
        }
    }



    return(
        <div className="teamsboard__wrapper">
            <div className="myteams__header d-flex justify-content-between">
                <div className="myteams__header--title-div">
                    <p className="myteams__header--title">My teams</p>
                </div>
                <div className="myteams__header--icon" onClick={createTeam}>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-plus-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M12 1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zM8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5V6z"/>
                    </svg>
                </div>
            </div>
            <div className="myteams__infos">
                <table className="table">
                    <thead>
                        <tr>
                            <th className="myteams__table--head myteams__table--head-name" id="name" onClick={sortTeams}>Name</th>
                            <th className="myteams__table--head myteams__table--head-desc" id="description" onClick={sortTeams}>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {iterateTeams()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MyTeams;