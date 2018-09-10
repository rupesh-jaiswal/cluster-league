import React, { Component } from 'react';
import { Tabs, Tab, Badge} from 'react-bootstrap';
import Matches from './matches';
import Teams from './teams';
import Stats from './stats';
import Players from './players';
import { setTabIndex } from '../actions/actions';
import { connect } from 'react-redux';
export class HomeComponent extends Component {
    handleSelect = (key) => {
       this.props.dispatch(setTabIndex(key));
    };
    
      
    render() {
        console.log(this.props.tabIndex);
        const teams=(
            <div ><h4 className="teams-tab">Teams</h4><Badge>5</Badge></div>
        );
        return (
            <div className="container">
            <Tabs
                activeKey={this.props.tabIndex}
                onSelect={this.handleSelect}
                id="controlled-tab-example"
                mountOnEnter={true}
                unmountOnExit={true}
            >
                <Tab eventKey={1} title={<h4>Matches</h4>}>
                <Matches />
                </Tab>
                <Tab eventKey={2} title={<h4>Stats</h4>}>
                <Stats />
                </Tab>
                <Tab eventKey={3} title={teams} >
                <Teams />
                </Tab>
                <Tab eventKey={4} title={<h4>Players</h4>} >
                <Players />
                </Tab>
            </Tabs>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    tabIndex: state.tabIndex
})
export default connect(mapStateToProps)(HomeComponent);
