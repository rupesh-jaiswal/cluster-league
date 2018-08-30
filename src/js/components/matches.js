import React, { Component } from 'react';
import axios from 'axios';
import request from 'superagent';
import { connect } from 'react-redux';
import { getMatches } from '../actions/actions';
import TeamLogoName from './team-logo-name';
import { formatDateTime } from '../utils/date-time';
export class Matches extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        axios.get('http://cluster-league.d3m0li5h3r.com/fixtures')
        .then((response) => {
            console.log(response);
            formatDateTime(response.data[0].time);
        })
        .catch((error) => console.log(error));
        /*const myApi = {
            //baseURL: 'http://cluster-league.d3m0li5h3r.com',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            crossDomain: true,
          };
          
          {headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }}
          
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

        */
       this.props.dispatch(getMatches());
    }
    renderMatches() {
        const matches = this.props.matches.map((match, index) => (
            <div className="match-container" key={index}>
                    <div className="date-container">
                        <h4>{ match.time }</h4>
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