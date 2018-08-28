import React, { Component } from 'react';
import { connect } from "react-redux";

export class Stats extends Component {
    componentDidMount() {
        this.props.dispatch(getStats());
    }

    renderStat() {
        const stats = this.props.stats.map((stat, index) => {
            return (
                <div className="stat-contanier">
                    <h4>{stat.id} </h4>
                    <h4>{stat.team.name}</h4>
                </div>
            )
        });
        return stats;
    }

    render() {
        <div className="stats-container">
            {this.renderStat()}
        </div>
    }
}

const mapStateToProps = (state) => ({
    stats: state.stats
});

export default connect(mapStateToProps)(Stats);