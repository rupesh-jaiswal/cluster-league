import React, { Component } from "react";
import { Modal, Button } from 'react-bootstrap';
import Players from './players';
export default class PlayersModal extends Component {
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.onClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.team.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Players teamID={this.props.team.id }/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onClose}>Close</Button>
          </Modal.Footer>
        </Modal>
        );
    }
}