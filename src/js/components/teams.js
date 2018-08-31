import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTeams } from '../actions/actions';
import teamLogo from '../../img/default_icon.jpeg';
import PlayersModal from './players-modal';
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

    openModal = (team) => {
        console.log(team);
        this.setState({ team, show: true});
    }

    handleClose = () => {
        this.setState({show: false});
    };
    renderteams() {
        const teams = this.props.teams.map((team, index) => (
            <div className="team-container" key={index} onClick={this.openModal.bind(this, team)}>
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
               <PlayersModal {...this.state} onClose={this.handleClose} />
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