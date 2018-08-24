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
        const myApi = {
            //baseURL: 'http://cluster-league.d3m0li5h3r.com',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            crossDomain: true,
          };
          /*
          {headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }}
          */
        var config = {
            method: 'GET',
            url: '/fixtures'
        };
        console.log(axios.defaults.headers.common);
        //axios.headers.baseURL="http://cluster-league.d3m0li5h3r.com";
        axios.get('http://cluster-league.d3m0li5h3r.com/fixtures', myApi)
        //.set({ 'Access-Control-Allow-Origin': '*',
            //'Referer': 'http://cluster-league.d3m0li5h3r.com'
        //})
        .then((response) => {
            console.log(response);
        })
        .catch((error) => console.log(error));
    }
    renderMatches() {
        const matches = this.state.matches.map((match, index) => (
            <div className="match-container" key={index}>
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