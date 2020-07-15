import React, { useEffect, useState } from 'react';
import Formation from './Formation/Formation';
import SearchPlayer from './SearchPlayer/SearchPlayer';
import './TeamConfiguration.css';

const TeamConfiguration = (props) =>{
    let[purpose,setPurpose] = useState({purpose:"ADD_TEAM"});

    const saveTeamFormation = (formation) =>{
        props.saveTeamFormation(formation);
    }

    return(
        <div>
            <h4 className="configure-squad__title">CONFIGURE SQUAD</h4>
            <div className="team-configuration__wrapper row">
                <div className="col-sm-12 col-md-6 mt-sm-2 mt-md-1">
                    <Formation formation={props.formation} saveTeamFormation={saveTeamFormation} />
                </div>
                <div className="col-sm-12 col-md-6 mt-sm-2 mt-md-1">
                    <SearchPlayer />
                </div>
            </div>

        </div>
    )
}

export default TeamConfiguration;