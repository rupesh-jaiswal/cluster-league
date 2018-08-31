import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPlayers } from '../actions/actions';
import Player from './player';
export class Players extends Component {
    componentDidMount() {
        this.props.dispatch(getPlayers(this.props.teamID));
    }

    renderPlayers() {
        const players = this.props.players.map((player) => {
            return (
                <Player {...player} key={player.id}/>
            );
        });
        return players;
    }
    render() {
        return (
            <div className="players-container">
                {this.renderPlayers()}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        players: state.players
    }
};
export default connect(mapStateToProps)(Players);