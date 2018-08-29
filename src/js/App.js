import React, { Component } from 'react';
//import logo from './logo.svg';
import '../styles/App.css';
import { Tabs, Tab, Badge} from 'react-bootstrap';
import Matches from './components/matches';
import Teams from './components/teams';
import Stats from './components/stats';
import store from '../store';
import { Provider } from 'react-redux';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 1
    }
  }
  handleSelect = (key) => {
    this.setState({key});
  };

  
  render() {
    const teams=(
      <div ><h4 className="teams-tab">Teams</h4><Badge>4</Badge></div>
    );
    return (
      <Provider store={store}>
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
                <Stats />
              </Tab>
              <Tab eventKey={3} title={teams} >
                <Teams />
              </Tab>
            </Tabs>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
