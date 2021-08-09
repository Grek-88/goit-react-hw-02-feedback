import { Component } from 'react';

class Statistics extends Component {
    render() {
        const {
            good,
            neutral,
            bad,
            total = 0,
            positivePercentage = 0,
        } = this.props;
        return (
            <>
                <p>Good: {good}</p>
                <p>Neutral: {neutral} </p>
                <p>Bad: {bad}</p>
                <p>Total: {total}</p>
                <p>Positive feedback: {positivePercentage}%</p>
            </>
        );
    }
}

export default Statistics;
