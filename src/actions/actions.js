import fixtures from './api-data/fixtures';
import teams from './api-data/teams';
import stats from './api-data/stats';
export const MATCHES_FETCH_SUCCESS = 'MATCHES_FETCH_SUCCESS';
export const TEAMS_FETCH_SUCCESS = 'TEAMS_FETCH_SUCCESS';
export const STATS_FETCH_SUCCESS = 'STATS_FETCH_SUCCESS';
export function getMatches() {
    return {
        type: MATCHES_FETCH_SUCCESS,
        matches: fixtures
    };
}
export function getTeams() {
    return {
        type: TEAMS_FETCH_SUCCESS,
        teams: teams
    };
}
export function getStats() {
    return {
        type: STATS_FETCH_SUCCESS,
        stats: stats
    };
}
