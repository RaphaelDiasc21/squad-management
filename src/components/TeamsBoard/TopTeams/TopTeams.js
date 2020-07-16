import React, { useEffect, useState } from 'react';
import TopTeam from './TopTeam/TopTeam';
import './TopTeams.css';
import store from '../../State/Store';

const TopTeams = () =>{
    let[teams,setTeams] = useState([]);
    useEffect(()=>{
        let teams = store.getState().teams;
        setTeams([...teams])
    },[store.getState().teams]);

    const renderTeams = () =>{
        return teams.map((team) =>{
           return <TopTeam name={team.name} avg="21.1"/>
        })
    }
    return(
        <div className="topteams">
            <div className="teamsboard__wrapper">
                <div className="topteams__header">
                    <p>Top 5</p>
                </div>
                <div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <p style={{fontWeight:"700"}}>Highest avg age</p>
                            <div className="topteams__infos">
                                {renderTeams()}
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <p style={{fontWeight:"700"}}>Lowest avg age</p>
                            <div className="topteams__infos">
                                {renderTeams()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopTeams;