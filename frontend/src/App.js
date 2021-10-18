import React, { useState, useEffect } from 'react';
import StartView from './components/StartScreen/StartView';
import QuestionView from './components/QuestionScreen/QuestionView';
import './App.css';

const App = () => {
  const [startQuiz, setStartQuiz] = useState(0);
  const [questions, setQuestions] = useState({});

  function startQuizClickHandler() {
    setStartQuiz(true)
  };

  useEffect(() => {
    fetch('/get-questions').then(res => res.json()).then(data => {
      setQuestions(data.questions)
    });
  }, []);

  return (
    <div className="App">

        { !startQuiz ? <StartView clickHandler = {startQuizClickHandler}/> : null }
        { startQuiz ? <QuestionView questions={questions} /> : null }

    </div>
  );
}

export default App;