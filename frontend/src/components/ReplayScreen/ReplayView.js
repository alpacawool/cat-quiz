import React from 'react';
import './ReplayView.css';

const ReplayView = (props) => {

    return(
        <div id="replay-div">
            <h1>Cat Breed Quiz</h1>
            <p>Congratulations! You have completed the quiz.</p>
            <p><b>Final Score:</b></p>
            <p id="score-text">{props.score}</p>
            <div id="replay-button" onClick={props.clickHandler}>
                <div id="replay-text">Replay</div>
                <div id="replay-image"></div>
            </div>

        </div>
    );
};

export default ReplayView;