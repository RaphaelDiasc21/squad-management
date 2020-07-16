import React, { useEffect, useState } from  'react';
import { useHistory } from 'react-router-dom';
import './TeamsBoard.css';
import MyTeams from './MyTeams/MyTeams';
import TopTeams from './TopTeams/TopTeams';
import Store from '../State/Store';
import store from '../State/Store';

const TeamsBoard = () =>{
    const history = useHistory();

    let[teams,setTeam] = useState(Store.getState().teams);
    let teamsData = teams;
    const getTeams = () =>{
      setTeam([...Store.getState().teams])
      teamsData = teams;
    }

    const deleteTeam = (event) =>{
      let teamsId = teams.map((team)=>{ return team.id});

      let idpos = teamsId.indexOf(Number(event),0);

      Store.dispatch({
        type:"DELETE_TEAM",
        payload:idpos
      });

      getTeams();
      console.log(teams);
    }

    const editTeam = (id) =>{
        //This method filter the team by its id passed by argument from edit icons click event
        //After filtered I redirect the user to squad information page programatically
        //Using the react router history API, with the team information and it's index
        let teamStoreIndex;
        let team = teams.filter((team,index)=>{
          
          if(team.id == id){
            teamStoreIndex = index;
            return team;
          }
        });

        history.push("/create-team",
        {
          team:team,
          teamStoreIndex:teamStoreIndex
        })
    }

    return(
        <div>
            <div className="teamboard__wrapper">
              <div className="row w-100 m-0">
                <div className="col-sm-12 col-md-6 mt-4">
                  <MyTeams 
                  teams={teamsData} 
                  deleteTeam={deleteTeam}
                  editTeam={editTeam}/>
                </div>
                <div className="col-sm-12 col-md-6 mt-4">
                  <TopTeams />
                </div>
              </div>
            </div>

        </div>
    )
}

export default TeamsBoard;