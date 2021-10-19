import React, {useState} from 'react'
import QuestionBox from '../QuestionBox/QuestionBox';

const QuestionView = (props) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);

    function moveToNextQuestion(isCorrect) {
        if (currentQuestion === props.questions.length - 1) {
            console.log("You have reached the end of the questions")
            // Show results?
        } else {
            setCurrentQuestion(currentQuestion+1)
        }
    }

    var question_boxes = [];

    for (var i = 0; i < props.questions.length; i++) {
        question_boxes.push(<QuestionBox key={i} question={props.questions[i]} changeQuestion={moveToNextQuestion} />)
    }

    return(
        <div>
            <h1>Cat Breed Quiz</h1>
            {question_boxes[currentQuestion]}
        </div>
    );
};

export default QuestionView;