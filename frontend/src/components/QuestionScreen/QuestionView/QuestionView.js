import React, {useState} from 'react'
import QuestionBox from '../QuestionBox/QuestionBox';

const QuestionView = (props) => {
    const [displayQuestion, setDisplayQuestion] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState({});

    var question_boxes = [];

    for (var i = 0; i < props.questions.length; i++) {
        question_boxes.push(<QuestionBox key={i} question={props.questions[i]} />)
    }

    return(
        <div>
            <h1>Cat Breed Quiz</h1>
            {question_boxes}
        </div>
    );
};

export default QuestionView;