import { combineReducers } from 'redux';
import { 
    REQUEST_LOGIN,
    SUCCESS_LOGIN, 
    FALIURE_LOGIN,
    REQUEST_ALL_MATCHES,
    SUCCESS_ALL_MATCHES,
    FALIURE_ALL_MATCHES,
    REQUEST_LEAGUE,
    SUCCESS_LEAGUE,
    FALIOUR_LEAGUE
} from '../actions/actionsTypes';

function login(state = {}, action) {
    switch(action.type) {
        case REQUEST_LOGIN: 
            return Object.assign({}, state, {
                isFetching: true,
            })
        case SUCCESS_LOGIN:
            return Object.assign({}, state, {
                isFetching: false,
                loginDetails: action.json,
            })
        default:
            return state
    }
}

function getAllMatches( state=[], action) {
    switch(action.type) {
        case REQUEST_ALL_MATCHES:
            return Object.assign([], state, {
                isloading: true,
            }) 
        case SUCCESS_ALL_MATCHES:
            return Object.assign([], state, {
                isloading: false,
                allMatches: action.matches,
            })
        default:
            return state
    }
}

function getAllLeague(state=[], action) {
    switch(action.type) {
        case REQUEST_LEAGUE: 
            return Object.assign([], state, {
                isloading: true,
            }) 
        case SUCCESS_LEAGUE:
            return Object.assign([], state, {
                isloading: false,
                allleague: action.league,
            })
        default:
            return state
    }
}
const rootReducer = combineReducers({
    getAllMatches,
    getAllLeague,
    login,
    
  })

export default rootReducer