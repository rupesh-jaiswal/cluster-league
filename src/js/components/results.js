import React, { Component } from 'react';
import { getResults } from '../actions/actions';
import { connect } from 'react-redux';
import Result from './result';
export class Results extends Component {
    componentDidMount() {
        this.props.dispatch(getResults());
    }
    renderResults() {
        const results  = this.props.results.map(result => (
            <Result {...result} key = {result.id} />    
        ));
        return results;
    }

    render() {
        return (
            <div className="results-container">
                {this.renderResults()}
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        results: state.results
    }
}

export default connect(mapStateToProps)(Results);
