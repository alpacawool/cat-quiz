import React from 'react';
import './TutorialView.css';
import tutorial from './tutorial.png';

const TutorialView = (props) => {

    return(
        <div id="tutorial-div">
            <h1>Cat Breed Quiz: How to Play</h1>
            <div id ="back-button" onClick={props.clickHandler}>Back to main menu</div><br/>
            <img src={tutorial} alt="tutorial"/>
 
        </div>
    );
};

export default TutorialView;