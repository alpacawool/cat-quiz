import React from 'react';

const ReplayView = (props) => {

    return(
        <div>
            <h1>Cat Breed Quiz</h1>
            <button onClick={props.clickHandler}>Replay</button>
        </div>
    );
};

export default ReplayView;