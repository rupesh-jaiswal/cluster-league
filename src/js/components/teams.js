import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { getTeams } from '../actions/actions';
import teamLogo from '../../img/default_icon.jpeg';
class Teams extends Component {
    constructor(props) {
        super(props);
        this.state={
            show: false,
            team: {}
        }
    }
    componentDidMount() {
        this.props.dispatch(getTeams());
    }
    renderteams() {
        const teams = this.props.teams.map((team, index) => (
            <Link to={{
                pathname: `/cluster-league/teams/${team.id}`,
                state: { team: team }
              }}
             key={index}  >
                <div className="team-container" >
                    <img src={team.logo_url || teamLogo} 
                        a11y={team.name}
                        alt={team.name}
                    />
                    <div className="team-data">
                        <h3>{team.name}</h3>
                        <h4>{team.manager}</h4> 
                    </div>
                </div>
            </Link>
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