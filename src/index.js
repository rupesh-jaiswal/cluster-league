import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './js/App';
import registerServiceWorker from './registerServiceWorker';
import createHistory from "history/createBrowserHistory"
const history = createHistory()
history.push('/cluster-league');
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
