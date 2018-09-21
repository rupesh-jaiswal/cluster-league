import React, { Component } from 'react';
import { getPlayerGoals } from '../actions/actions';
import { connect } from 'react-redux';

export class PlayersGoal extends Component {
    componentDidMount() {
        this.props.dispatch(getPlayerGoals());
    }

    renderPlayerGoals() {
        const playerGoals = this.props.playersGoals.map((player, index ) => (
            <div className="player-goals" key={index}>
                <div className="player-column1" ><h4>{player.player}</h4></div>
                <h4>{player.goals}</h4>
            </div>
        ))
        return playerGoals;
    }
    render() {
        return (
            <div className="players-goal-container">
            <h4 className="table-caption">Player Standings</h4> 
                <div className="player-header">
                        <div className="player-column1" ><h4>Player</h4></div>
                        <h4>Goals</h4>
                    </div>
                {this.renderPlayerGoals()}
            </div>
        );
    }
}
const mapStateToProps = ({playersGoals}) => {
    return {
        playersGoals
    }
}

export default connect(mapStateToProps)(PlayersGoal);