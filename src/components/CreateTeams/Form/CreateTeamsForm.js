import React, { useState, useRef, useEffect } from 'react';
import './CreateTeamsForm.css';
import Tag from './tag/Tag';

const CreateTeamsForm = (props) =>{
    // the purpose of form on the current moment, by default it is for ADD a new team
    let[purpose,setPurpose] = useState({purpose:"ADD_TEAM"})

    let[validations,setValidation] = useState({
        nameInputError:"",
        websiteInputError:"",
        descriptionInputError:"",
        typeInputError:"",
        tagsInputError:""
    });

    let[teamData,setTeamData] = useState({
        name:'',
        description:'',
        website:'',
        type:'',
        tags:[]
    });

    let[tags,setTags] = useState([]);

    let[tag,setTag] = useState({
        name:""
    });

    useEffect(()=>{
        console.log(props.team)
            setTeamData({
                ...props.team
            });

            setTags([...props.team.tags])
            setPurpose({...props.purpose})
        
    },[props]);

    const renderTags = ()=>{
        return tags.map(tag => <Tag name={tag.name} deleteTag={deleteTag}/>)
    }

    const deleteTag = (tag) =>{
        let tagPosArr = tags.map(tagElement =>{
            return tagElement.name
        }).indexOf(tag);

        tags.splice(tagPosArr,1);
        setTags([...tags]);
        setTeamData({
            ...teamData,
            tags:[...tags]
        })
    }

    const inputTagHandler = (event) =>{
        event.preventDefault();
        console.log("dsaf")
        if(event.keyCode === 13 || event.keyCode === 191){
            setTags([...tags,{name:tag.name}]);
            setTeamData({
                ...teamData,
                tags:[...teamData.tags,{name:tag.name}]
            })
            return event.preventDefault();
        }
        
        if(event.keyCode === 8){
            let tagWord = tag.name.split("")
            tagWord.pop();
            let backSpacedWord = tagWord.join("");
            setTag({name:backSpacedWord});
            return event.preventDefault();
        }

        setTag({name:tag.name+event.key})
        
    }

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

    const validateDate = ()=>{
        let nameInputError = false;
        let websiteInputError = false;
        let descriptionInputError = false;
        let typeInputError = false;
        let tagsInputError = false;

        if(teamData.name == ""){          
            nameInputError = true;
        }
        if(teamData.website === ""){
            websiteInputError = true;
        }
        if(teamData.description === ""){
            descriptionInputError = true;
        }
        if(teamData.type === ""){
            typeInputError = true;
        }
        if(tags.length == 0){
            tagsInputError = true;
        }else{
            return true;
        }
        setValidation({
            nameInputError:nameInputError,
            websiteInputError:websiteInputError,
            descriptionInputError:descriptionInputError,
            typeInputError:typeInputError,
            tagsInputError:tagsInputError
        })
        return false;
    }

    const saveTeam = (event) =>{
        event.preventDefault();
        //Here First I validate all the inputs and after if it's all right I save the team
        //One observation that is the usage of the purpose, by it is defined if it will create a new team or just edit
        if(validateDate()){
            if(typeof props.teamIndex != 'undefined'){
               return props.saveTeamInfo(teamData,purpose.purpose,props.teamIndex);
            }
            props.saveTeamInfo(teamData,purpose.purpose);
        }
        
    }

    return(
        <div className="create-team">
            <h4 className="create-team__title">TEAM INFORMATION</h4>
            <form>
              <div className="create-team__form-wrapper">
                <div className="create-team__form--input-div">
                    <div className={"create-team__form---input-div-layout mr-md-3 " + (validations.nameInputError ? 'create-team__form--error-highlights' : '')}>
                        <label>Team name</label>
                        <input value={teamData.name} onChange={(event)=> inputNameHandler(event)} type="text" />
                    </div>
                    <div className={"create-team__form---input-div-layout " + (validations.websiteInputError ? 'create-team__form--error-highlights' : '')}>
                        <label>Team website</label>
                        <input value={teamData.website} onChange={(event)=> inputWebHandler(event)} type="text" />
                    </div>
                </div>

                <div className="create-team__form--input-div">
                   <div className={"create-team__form---input-div-layout mr-md-3 " + (validations.descriptionInputError ? 'create-team__form--error-highlights' : '')}>
                    <label>Description</label>
                    <textarea rows="10" cols="12" value={teamData.description} onChange={(event)=> inputDescriptionHandler(event)} />
                   </div>
                    <div className="create-team__form--input-div-together">
                       <div>
                           <div className={"create-team__form---input-div-layout " + (validations.typeInputError ? 'create-team__form--error-highlights' : '')}>
                                <label>Team type</label>
                                <div class="create-team__form--input-radio">  
                                    <input type="radio" id="Real-radio-input" name="type" value="Real" onChange={(event)=> inputTypeHandler(event)} />
                                    <label>Real</label>

                                    <input type="radio" id="Fantasy-radio-input" name="type" value="Fantasy" onChange={(event)=> inputTypeHandler(event)}/>
                                    <label>Fantasy</label>
                                </div>
                            </div>
                        </div>
                        <div className={"create-team__form---input-div-layout w-100 " + (validations.tagsInputError ? 'create-team__form--error-highlights' : '')}>
                            <label>Tags</label>
                            <div className="create-team__form--tag-container d-flex align-items-center">
                                {renderTags()}
                                <input  
                                onKeyDown={inputTagHandler}
                                value={tag.name}/>
                            </div>
                        </div>
                    </div>

                </div>
                </div>
                <div className="w-100 d-flex justify-content-center mt-2">
                     <button className="btn save-team__button--div" onClick={saveTeam}>Save team information</button> 
                </div>
            </form>
        </div>
    );
}

export default CreateTeamsForm;