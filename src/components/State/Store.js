import { createStore } from 'redux';

const reducer = (state,action) =>{
    switch(action.type){
        case "ADD_TEAM":
            state.teams.push(action.payload);
            break;
        case "DELETE_TEAM":
            state.teams.splice(action.payload);
            break;
        case "EDIT_TEAM":
            state.teams[action.payload.teamIndex] = action.payload.teamData;
            break;

    }

    return state;
}

const store = createStore(reducer,{
    teams:[]
});

export default store;