import React from 'react'
import './QuestionChoice.css'

const QuestionChoice = (props) => {

    return (
        <div id="single-choice" className={props.className} onClick={ ()=> props.onClick(props.option)}>
            {props.choice}
        </div>
    );
};

export default QuestionChoice;