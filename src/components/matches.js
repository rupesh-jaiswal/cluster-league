import React, { Component } from 'react';
import axios from 'axios';
import request from 'superagent';
import { connect } from 'react-redux';
import { getMatches } from '../actions/actions';
export class Matches extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
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
 function mapStateToProps(state) {
     return {
         matches: state.matches
     }
 }

 export default connect(mapStateToProps)(Matches);