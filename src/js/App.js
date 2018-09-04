import React, { Component } from 'react';
//import logo from './logo.svg';
import '../styles/App.css';
import PrimaryLayout from './components/primary-layout';
import store from '../store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
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
    return (
      <Provider store={store}>
        <BrowserRouter >
          <PrimaryLayout />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
