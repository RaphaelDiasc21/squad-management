import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Store from '../State/Store';
import './CreateTeams.css';
import CreateTeamsForm from './Form/CreateTeamsForm';
import TeamConfiguration from './TeamConfiguration/TeamConfiguration';

const CreateTeams = () =>{
    const history = useHistory();
    let[purpose,setPurpose] = useState({purpose:"ADD_TEAM"});
    let[teamIndex,setTeamIndex] = useState({index:"undefined"});

    let[team,setTeam] = useState({
        name:'',
        description:'',
        website:'',
        type:'',
        tags:[],
        formation:{formation:"3-4-3"}
    });


    useEffect(()=>{
        if(typeof history.location.state != 'undefined'){
            setTeam({...history.location.state.team[0]});
            setPurpose({purpose:"EDIT_TEAM"});
            setTeamIndex({index:history.location.state.teamStoreIndex});
        }
    },[]);

    const saveTeam = (team,purpose,teamIndex = null) =>{
        if(purpose == "ADD_TEAM"){
            team.id = Store.getState().teams.length;
            team.formation = {formation:"3-4-3"};
            setTeam({...team});
            console.log(team);
            Store.dispatch({
                type:purpose,
                payload:team
            });
        }else{
            console.log(team);
            Store.dispatch({
                type:purpose,
                payload:{
                teamData:team,
                teamIndex:teamIndex
              }
            });
        }    
    }

    const saveTeamFormation = (formationInput) =>{
        let teamToSave = team;
        teamToSave.formation = {formation:formationInput}
        if(teamIndex.index != "undefined"){
            saveTeam(teamToSave,purpose.purpose,teamIndex.index);
        }else{
            saveTeam(saveTeam(teamToSave,purpose.purpose));
        }
        
    }

    return(
        <div className="createTeams__wrapper">
            <h1 className="createTeams__wrapper--title">Create your team</h1>
            <CreateTeamsForm saveTeamInfo={saveTeam}
            team={team}
            purpose={purpose} 
            teamIndex={teamIndex.index}/>

            <TeamConfiguration 
            formation={team.formation}
            teamStateRouter={history.location.state} 
            saveTeamFormation={saveTeamFormation}/>
        </div>
    );
}


export default CreateTeams;