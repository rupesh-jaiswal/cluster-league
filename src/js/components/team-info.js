import React from 'react';
import { Link } from "react-router-dom";
import Players from './players';
import TeamLogoName from './team-logo-name';
const TeamInfo = ({match, location: {state: { team }}}) => (
    <div className="container">
        <div className="team-info-header">
            <Link to="/cluster-league"> <i className="fa fa-arrow-left" ></i></Link>
            <TeamLogoName {...team} />
        </div>
        <Players teamID={match.params.id}/>
    </div>
  );

export default TeamInfo;
