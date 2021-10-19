import React from 'react';

const ReplayView = (props) => {

    return(
        <div>
            <h1>Cat Breed Quiz</h1>
            <p>Congratulations! You have completed the quiz.</p>
            <p>Final Score:</p>
            <p><b>{props.score}</b></p>
            <button onClick={props.clickHandler}>Replay</button>
        </div>
    );
};

export default ReplayView;