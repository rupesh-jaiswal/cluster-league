import React, { Component } from 'react';
import PropTypes from 'prop-types';
import teamLogo from '../../img/default_icon.jpeg';
export class TeamLogoName extends Component {
    render() {
        return (
            <React.Fragment>
                <img src={this.props.logo_url} className="stats-team-logo" alt={this.props.name}/>
                <h4>{this.props.name}</h4>
            </React.Fragment>
        );
    }
}

TeamLogoName.propTypes={
    logo_url: PropTypes.string,
    name: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number
}
TeamLogoName.defaultProps = {
    logo_url: teamLogo
}
export default TeamLogoName;