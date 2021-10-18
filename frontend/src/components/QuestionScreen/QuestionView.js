import React from 'react'

const QuestionView = (props) => {
    return(
        <div>
            <h1>Cat Breed Quiz</h1>
            <p>{props.questions[0].title}</p>
        </div>
    );
};

export default QuestionView;