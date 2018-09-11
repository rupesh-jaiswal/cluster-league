import axios from 'axios';

export const MATCHES_FETCH_SUCCESS = 'MATCHES_FETCH_SUCCESS';
export const TEAMS_FETCH_SUCCESS = 'TEAMS_FETCH_SUCCESS';
export const STATS_FETCH_SUCCESS = 'STATS_FETCH_SUCCESS';
export const PLAYERS_FETCH_SUCCESS = 'PLAYERS_FETCH_SUCCESS';
export const SET_TAB_INDEX = 'SET_TAB_INDEX';
export const CLEAR_PLAYERS = 'CLEAR_PLAYERS';
export const RESULTS_FETCH_SUCCESS = 'RESULTS_FETCH_SUCCESS';
export function getMatches() {
    return function(dispatch) {
        return  axios.get('http://cluster-league.d3m0li5h3r.com/fixtures')
        .then((response) => {
            dispatch( {
                type: MATCHES_FETCH_SUCCESS,
                matches: response.data
            });
        });
    }
}
export function getTeams() {
    return function(dispatch) {
        return  axios.get('http://cluster-league.d3m0li5h3r.com/teams')
        .then((response) => {
            dispatch( {
                type: TEAMS_FETCH_SUCCESS,
                teams: response.data
            });
        });
    }
}
export function getStats() {
    return function(dispatch) {
        return  axios.get('http://cluster-league.d3m0li5h3r.com/standings')
        .then((response) => {
            dispatch( {
                type: STATS_FETCH_SUCCESS,
                stats: response.data
            });
        });
    }
}
export function getPlayers(teamID) {
    let teamsURL='';
    if(teamID) {
        teamsURL=`teams/${teamID}/`;
    }
    return function(dispatch) {
        return  axios.get(`http://cluster-league.d3m0li5h3r.com/${teamsURL}players`)
        .then((response) => {
            dispatch( {
                type: PLAYERS_FETCH_SUCCESS,
                players: response.data
            });
        });
    }
}

export function setTabIndex(tabIndex) {
    return {
        type: SET_TAB_INDEX,
        tabIndex: tabIndex
    }
}
export function clearPlayers() {
    return {
        type: CLEAR_PLAYERS
    }
}
export function getResults() {
    return function(dispatch) {
        return  axios.get('http://cluster-league.d3m0li5h3r.com/results')
        .then((response) => {
            console.log(response);
            dispatch( {
                type: RESULTS_FETCH_SUCCESS,
                results: response.data
            });
        });
    }
}
