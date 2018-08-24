import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Tabs, Tab, Badge} from 'react-bootstrap';
import Matches from './matches';
import fixtures from './fixtures';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 1,
      matches: fixtures 

    }
  }
  handleSelect = (key) => {
    this.setState({key});
  };

  
  render() {
    const teams=(
      <div ><h4 className="teams-tab">Teams</h4><Badge>10</Badge></div>
    );
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Cluster League</h1>
        </header>
        <div className="container">
          <Tabs
            activeKey={this.state.key}
            onSelect={this.handleSelect}
            id="controlled-tab-example"
          >
            <Tab eventKey={1} title={<h4>Matches</h4>}>
              <Matches />
            </Tab>
            <Tab eventKey={2} title={<h4>Stats</h4>}>
              Tab 2 content
            </Tab>
            <Tab eventKey={3} title={teams} >
              Tab 3 content
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default App;
