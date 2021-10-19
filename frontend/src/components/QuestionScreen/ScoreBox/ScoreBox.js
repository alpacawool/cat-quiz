import React from 'react'

const ScoreBox = (props) => {
    return(
        <div><b>Current Score: </b> {props.score}</div>
    );
};

export default ScoreBox;