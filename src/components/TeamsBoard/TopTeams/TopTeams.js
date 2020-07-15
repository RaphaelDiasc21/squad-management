import React from 'react';
import TopTeam from './TopTeam/TopTeam';
import './TopTeams.css';

const TopTeams = () =>{
    return(
        <div className="topteams">
            <div className="teamsboard__wrapper">
                <div className="topteams__header">
                    <p>Top 5</p>
                </div>
                <div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <p>Highest avg age</p>
                            <div className="topteams__infos">
                                <TopTeam name="Raphael Dias" avg="21.1"/>
                                <TopTeam name="Raphael Costa" avg="21.1"/>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <p>Lowest avg age</p>
                            <div className="topteams__infos">
                                <TopTeam name="Raphael Dias" avg="21.1"/>
                                <TopTeam name="Raphael Costa" avg="21.1"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopTeams;