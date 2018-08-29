import React, { Component } from 'react';
import PropTypes from 'prop-types'
export class TeamLogoName extends Component {
    render() {
        return (
            <React.Fragment>
                <img src={this.props.logo_url} className="stats-team-logo"/>
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
    logo_url: "../../img/default_icon.jpg"
}
export default TeamLogoName;