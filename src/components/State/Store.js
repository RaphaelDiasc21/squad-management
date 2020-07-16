import { createStore } from 'redux';

const reducer = (state,action) =>{
    switch(action.type){
        case "ADD_TEAM":
            state.teams.push(action.payload);
            break;
        case "DELETE_TEAM":
            console.log(state.teams);
            state.teams.splice(action.payload,1);
            state.teams = state.teams;
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