import React from 'react';

const StartView = (props) => {

    return(
        <div>
            <h1>Cat Breed Quiz</h1>
            <button onClick={props.clickHandler}>Start</button>
        </div>
    );
};

export default StartView;