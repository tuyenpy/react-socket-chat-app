import { combineReducers } from 'redux';

const roomReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET ROOM': return state;
        case 'DATA RECEIVED': return action.data;
        default:
            return state;
    }
}

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET USER': return state;
        case 'USER RECEIVED': return action.data;
        default:
            return state;
    }
}



const rootReducer = combineReducers({
    rooms: roomReducer,
    user: userReducer,
});

export default rootReducer;