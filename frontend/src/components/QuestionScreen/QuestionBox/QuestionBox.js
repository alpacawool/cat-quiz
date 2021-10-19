import React, {useState} from 'react'
import QuestionChoice from '../QuestionChoice/QuestionChoice';
import CorrectBox from '../CorrectBox/CorrectBox';
import IncorrectBox from '../IncorrectBox/IncorrectBox';

const QuestionBox = (props) => {

    const [choiceClass0, setChoiceClass0] = useState("");
    const [choiceClass1, setChoiceClass1] = useState("");
    const [choiceClass2, setChoiceClass2] = useState("");
    const [showCorrect, setShowCorrect] = useState(0);
    const [showIncorrect, setShowIncorrect] = useState(0);
 

    async function choiceClickHandler(key) {

        // Show Results
        setChoiceClass0("incorrect-choice no-click")
        setChoiceClass1("incorrect-choice no-click")
        setChoiceClass2("incorrect-choice no-click")

        if (props.question.correct === 0) {
            setChoiceClass0("correct-choice no-click")
        } else if (props.question.correct === 1) {
            setChoiceClass1("correct-choice no-click")
        } else if (props.question.correct === 2) {
            setChoiceClass2("correct-choice no-click")
        }

        if (props.question.correct === key) {
            console.log("This is the correct answer!")
            setShowCorrect(true)
        } else {
            console.log("This is the incorrect answer!")
            setShowIncorrect(true)
        }

        // Wait 5 seconds for answer review
        await new Promise(r => setTimeout(r, 2000));
        // Move to Next Question
        props.changeQuestion();

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
            <b>{props.question.title}</b>
            {question_choices}
            { showCorrect ? <CorrectBox /> : null }
            { showIncorrect ? <IncorrectBox /> : null }
        </div>
    );

    
};

export default QuestionBox;