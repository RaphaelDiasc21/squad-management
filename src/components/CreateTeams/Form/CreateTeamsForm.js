import React, { useState } from 'react';

const CreateTeamsForm = () =>{
    let[teamData,setTeamData] = useState({
        name:'',
        description:'',
        website:'',
        type:'',
        tags:[]
    });

    const inputNameHandler = (event) =>{
        setTeamData({
            ...teamData,
            name:event.target.value
        });
    }

    const inputWebHandler = (event) =>{
        setTeamData({
            ...teamData,
            website:event.target.value
        });
    }

    const inputDescriptionHandler = (event) =>{
        setTeamData({
            ...teamData,
            description:event.target.value
        });
    }

    const inputTypeHandler = (event) =>{
        setTeamData({
            ...teamData,
            type:event.target.value
        });
    }

    return(
        <form>
            <div className="createm-team__form--input-div">
                <label>Team name</label>
                <input value={teamData.name} onChange={(event)=> inputNameHandler} type="text" />

                <label>Team website</label>
                <input value={teamData.website} onChange={(event)=> inputWebHandler} type="text" />
            </div>

            <div className="createm-team__form--input-div">
                <label>Description</label>
                <textarea rows="4" cols="12" value={teamData.description} onChange={(event)=> inputDescriptionHandler} />

                <div>
                    <label>Team type</label>
                    <input type="radio" id="Real-radio-input" name="Real" value="Real" onChange={(event)=> inputTypeHandler} />
                    <label>Real</label>

                    <input type="radio" id="Fantasy-radio-input" name="Fantasy" value="Fantasy" onChange={(event)=> inputTypeHandler}/>
                    <label>Fantasy</label>

                    <label>Tags</label>
                    <textarea rows="2" cols="8" />
                </div>

            </div>
        </form>
    );
}

export default CreateTeamsForm;