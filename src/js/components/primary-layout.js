import React from 'react';
import { Route } from 'react-router-dom'
import TeamInfo from './team-info';
import HomeComponent from './home';
const PrimaryLayout = () => (
    <div className="App">
        <header className="App-header">
        <h1 className="App-title">Cluster Football League</h1>
        </header>
      <main>
        <Route path="/cluster-league" exact component={HomeComponent} />
        <Route path="/cluster-league/teams/:id" component={TeamInfo} />
      </main>
    </div>
);
export default PrimaryLayout;