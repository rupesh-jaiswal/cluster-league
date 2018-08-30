import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTeams } from '../actions/actions';
import teamLogo from '../../img/default_icon.jpeg';
class Teams extends Component {
    componentDidMount() {
        this.props.dispatch(getTeams());
    }
    renderteams() {
        const teams = this.props.teams.map((team, index) => (
            <div className="team-container" key={index}>
                <img src={team.logo_url || teamLogo} 
                    a11y={team.name}
                   />
                <div className="team-data">
                    <h3>{team.name}</h3>
                    <h4>{team.manager}</h4> 
                </div>
            </div>
        ));
        return teams;
    }
    render() {
        return (
           <div className="teams-container">
               {this.renderteams()}
            </div>
        );
    }
}
const mapStateToProps =(state) => {
    return {
        teams: state.teams
    }
}
export default connect(mapStateToProps)(Teams);