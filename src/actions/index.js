import { history } from '../history';
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
} from './actionsTypes';

export function requestLogin() {
    return {
        type: REQUEST_LOGIN,
    } 
}
export function loginSuccess(json) {
    return {
        type: SUCCESS_LOGIN,
        json
    }
}

export function requestAllMatches(matches) {
    return {
        type: REQUEST_ALL_MATCHES,
        
    }
}

export function sucessAllMatches(matches) {
    return {
        type: SUCCESS_ALL_MATCHES,
        matches 
    }
}

export function requestLeague() {
    return {
        type: REQUEST_LEAGUE,
    }
}
export function successLeague(league) {
    return {
        type: SUCCESS_LEAGUE,
        league,
    }
}

export function login(username, password) {
    var requestOptions = {
        method: 'POST',
        dataType: 'json',
        headers: {'Content-Type': 'application/json', "Access-Control-Allow-Origin": 'http://192.168.43.105:3000/' },
        body: JSON.stringify({ "email_id": username, "password": password }),
        mode: 'cors'
    };
    return dispatch => {
        dispatch(requestLogin())
        return fetch('https://beta-api.leaguex.com/auth/login', requestOptions)
        .then( res => res.json())
        .then( json => 
            {
                dispatch(loginSuccess(json))
                history.push('/AllMacthesList')
                // console.log(json.accesstoken)
                localStorage.setItem('accessToken', json.accesstoken)
            }
        )
    }
}

export function getAllMatches(matches) {
    var options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'x-access-token': localStorage.getItem('accessToken')
        }
    }
    return dispatch => {
        dispatch(requestAllMatches(matches))
        return fetch(`https://beta-api.leaguex.com:4000/leagues/userleagues?upcoming=true`, options)
        .then((responseJson) => responseJson.json())
        .then( matches=> dispatch(sucessAllMatches(matches)))

    }
}
export function getAllLeague(id, league) {
    var options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'x-access-token': localStorage.getItem('accessToken')
        }
    }
    return dispatch => {
        dispatch(requestLeague(league))
        return fetch(`https://beta-api.leaguex.com:4000/leagues?match_id=${id}`, options)
        .then((responseJson) => responseJson.json())
        .then( league => {
            dispatch(successLeague(league))
            history.push('/AllLeagues', {data: league})
        })
        

    }
}