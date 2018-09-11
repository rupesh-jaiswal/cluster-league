import React from 'react';
import { TeamLogoName } from './team-logo-name';
import { formatDateTime } from '../utils/date-time';

export const Result = (props) => {
    const renderCaret = (score1, score2) => {
        if(score1>score2) {
            return (<i className="fa fa-caret-left"></i>);
        }else{
            return (<div style={{width: "7px"}}></div>)
        }
    }
    return (
        <div className = "result-container">
            <div className="date-container">
                <h4>{ formatDateTime(props.time) }</h4>
            </div>
            <div className="results-opponents">
                <div className="opponents-scores">
                    <div className="opponents">
                        <TeamLogoName {...props.team1 }/>
                    </div>
                    <div className="scores">
                        <h4>{props.score1}</h4>
                        {renderCaret(props.score1, props.score2)}
                    </div>
                </div>
                <div className="opponents-scores">
                    <div className="opponents">
                        <TeamLogoName {...props.team2 }/>
                    </div>
                    <div className="scores">
                        <h4>{props.score2}</h4>
                        {renderCaret(props.score2, props.score1)}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Result;