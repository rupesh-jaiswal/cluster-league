import React, { Component } from 'react';
import fixtures from './fixtures';
import axios from 'axios';
import request from 'superagent';
export default class Matches extends Component {
    constructor(props) {
        super(props);
        console.log(fixtures);
        this.state = {
            matches: fixtures 
        }
    }
    componentDidMount() {
        request.get('/fixtures')
        .then((response) => {
            console.log(response);
        })
        .catch((error) => console.log(error));
    }
    renderMatches() {
        const matches = this.state.matches.map((match, index) => (
            <div className="match-container">
                    <div className="date-container">
                        <h3>{ match.time }</h3>
                    </div>
                    <div className="opponents">
                        <img src={match.team1.logo_url}
                            height="50px"
                            width="50px"/>
                        <h4>{match.team1.name}</h4>
                    </div>
                    <div><h3>VS</h3></div>
                    <div className="opponents">
                        <img src={match.team2.logo_url}
                            height="50px"
                            width="50px"/>
                        <h4>{match.team2.name}</h4>
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