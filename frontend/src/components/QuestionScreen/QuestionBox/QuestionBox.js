import React, {useState} from 'react'
import QuestionChoice from '../QuestionChoice/QuestionChoice';
import CorrectBox from '../CorrectBox/CorrectBox';
import IncorrectBox from '../IncorrectBox/IncorrectBox';

import './QuestionBox.css'

const QuestionBox = (props) => {

    const [choiceClass0, setChoiceClass0] = useState("single-choice-bg");
    const [choiceClass1, setChoiceClass1] = useState("single-choice-bg");
    const [choiceClass2, setChoiceClass2] = useState("single-choice-bg");
    const [showCorrect, setShowCorrect] = useState(0);
    const [showIncorrect, setShowIncorrect] = useState(0);
 

    async function choiceClickHandler(key) {

        // Show Results
        setChoiceClass0("incorrect-choice no-click");
        setChoiceClass1("incorrect-choice no-click");
        setChoiceClass2("incorrect-choice no-click");

        console.log("Selected: ", key);
        if (props.question.correct === 0) {
            if (key === props.question.correct) {
                setChoiceClass0("correct-choice-select no-click")
            } else {
                setChoiceClass0("correct-choice no-click")
            }
        } else if (props.question.correct === 1) {
            if (key === props.question.correct) {
                setChoiceClass1("correct-choice-select no-click")
            } else {
                setChoiceClass1("correct-choice no-click")
            }
        } else if (props.question.correct === 2) {
            if (key === props.question.correct) {
                setChoiceClass2("correct-choice-select no-click")
            } else {
                setChoiceClass2("correct-choice no-click")
            }
        }
        if (props.question.correct !== key && key === 0) {
            setChoiceClass0("incorrect-choice-select no-click");
        } else if (props.question.correct !== key && key === 1) {
            setChoiceClass1("incorrect-choice-select no-click");
        } else if (props.question.correct !== key && key === 2) {
            setChoiceClass2("incorrect-choice-select no-click");
        } 



        if (props.question.correct === key) {
            // Correct Answer
            setShowCorrect(true)
            // Wait 5 seconds for answer review
            // https://stackoverflow.com/questions/951021/
            await new Promise(r => setTimeout(r, 4000));
            // Move to Next Question
            props.changeQuestion(true);
        } else {
            // Incorrect Answer
            setShowIncorrect(true)
            await new Promise(r => setTimeout(r, 4000));
            // Move to Next Question
            props.changeQuestion(false);
        }



    };

    var question_choices = [];

    question_choices.push(
        <QuestionChoice 
            key = {0}
            option = {0} 
            choice={props.question.answer_0}
            onClick={choiceClickHandler}
            className={choiceClass0}
    />);
    question_choices.push(
        <QuestionChoice 
            key = {1} 
            option = {1}
            choice={props.question.answer_1}
            onClick={choiceClickHandler}
            className={choiceClass1}
    />);
    question_choices.push(
        <QuestionChoice 
            key = {2} 
            option= {2}
            choice={props.question.answer_2}
            onClick={choiceClickHandler}
            className={choiceClass2}
    />);



    return (
        <div>
            <div id="question-title">{props.question.title}</div>
            <img id="question-image" src={props.question.image} alt="cat"/>
            {question_choices}
            { showCorrect ? <CorrectBox /> : null }
            { showIncorrect ? <IncorrectBox /> : null } 
        </div>
    );

    
};

export default QuestionBox;