import React, { Component } from 'react';
import { connect } from "react-redux";
import { getStats } from '../actions/actions';
import TeamLogoName from './team-logo-name';
import PlayersGoal from "./players-goal";
export class Stats extends Component {
    componentDidMount() {
        this.props.dispatch(getStats());
    }

    renderStat() {
        const stats = this.props.stats.map((stat, index) => {
            return (
                <div className="stat-contanier" key={index}>
                    <div className="stats-column1" >
                        <h4>{index+1} </h4>
                        <TeamLogoName {...stat.team} />
                    </div>
                    <h4>{stat.played}</h4>
                    <h4>{stat.won}</h4>
                    <h4>{stat.lost}</h4>
                    <h4>{stat.drawn}</h4>
                    <h4>{stat.goals_for}</h4>
                    <h4>{stat.goals_against}</h4>
                    <h4>{stat.goals_for-stat.goals_against}</h4>
                    <h4>{stat.points}</h4>


                </div>
            )
        });
        return stats;
    }

    render() {
        return (
            <React.Fragment>
                
                <div className="stats-container">
                <h4 className="table-caption">League Standings</h4>
                    <div className="stats-header">
                            <div className="stats-column1" ><h4>Team</h4></div>
                            <h4>MP</h4>
                            <h4>W</h4>
                            <h4>L</h4>
                            <h4>D</h4>
                            <h4>GF</h4>
                            <h4>GA</h4>
                            <h4>GD</h4>
                            <h4>Pts</h4>
                        </div>
                    {this.renderStat()}
                </div>
                <PlayersGoal />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    stats: state.stats
});

export default connect(mapStateToProps)(Stats);