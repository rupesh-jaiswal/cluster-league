import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMatches } from '../actions/actions';
import TeamLogoName from './team-logo-name';
import { formatDateTime } from '../utils/date-time';
export class Matches extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
       this.props.dispatch(getMatches());
    }
    renderMatches() {
        const matches = this.props.matches.map((match, index) => (
            <div className="match-container" key={index}>
                    <div className="date-container">
                        <h4>{ formatDateTime(match.time) }</h4>
                    </div>
                    <div className="opponents">
                        <TeamLogoName {...match.team1 }/>
                    </div>
                    <div><h4>VS</h4></div>
                    <div className="opponents">
                        <TeamLogoName {...match.team2 }/>
                    </div>
                </div>
        ));
        return matches;
    }
    render() {
        return (<div className="matches-container">
                {this.renderMatches()}
            </div>);

    }
 }
 function mapStateToProps(state) {
     return {
         matches: state.matches
     }
 }

 export default connect(mapStateToProps)(Matches);