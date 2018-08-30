import React, { Component } from 'react';
import PropTypes from 'prop-types';
import playerLogo from '../../img/player_icon.png';
import { Badge} from 'react-bootstrap';
export default class Player extends Component {
    
    render() {
        const { player } = this.props;
        return (
            <div className="player-container" key={this.props.id}>
                <div className="personal info">
                    <img src={this.props.photo_url} width="140px" height="140px"/>
                    <h5>{this.props.name}</h5>
                </div>
                <div className="professional-info">
                    <h5>{this.props.position}</h5>
                    
                </div>
                {
                    this.props.is_manager && (
                        <div className="manager-info">
                            <div></div>
                            <Badge>Manager</Badge>
                        </div>
                    )
                }
                
            </div>
        );    
    }
}
Player.propTypes = {
    photo_url: PropTypes.string,
    name: PropTypes.string,
    position: PropTypes.string
}
Player.defaultProps = {
    photo_url: playerLogo
}