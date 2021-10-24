import React from 'react';
import './StartView.css';

const StartView = (props) => {

    return(
        <div>
            <h1>Cat Breed Quiz</h1>
            <div id="start-button" onClick={props.clickHandler}>
                <div id="start-text">Start</div>
                <div id="play-image"></div>
            </div>
            <div id="tutorial-button" onClick={props.clickHandlerTut}>Tutorial</div>
        </div>
    );
};

export default StartView;