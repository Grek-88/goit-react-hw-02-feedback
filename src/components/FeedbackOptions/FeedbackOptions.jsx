import React, { Component } from 'react';

import s from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
    render({ onLeaveFeedback } = this.props) {
        return (
            <>
                <button
                    className={s.btn}
                    type="button"
                    onClick={onLeaveFeedback}
                >
                    Good
                </button>
                <button
                    className={s.btn}
                    type="button"
                    onClick={onLeaveFeedback}
                >
                    Neutral
                </button>
                <button
                    className={s.btn}
                    type="button"
                    onClick={onLeaveFeedback}
                >
                    Bad
                </button>
            </>
        );
    }
}

export default FeedbackOptions;
