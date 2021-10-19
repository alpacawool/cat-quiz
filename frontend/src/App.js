import React, { useState, useEffect } from 'react';

import StartView from './components/StartScreen/StartView';
import QuestionView from './components/QuestionScreen/QuestionView/QuestionView';
import ReplayView from './components/ReplayScreen/ReplayView';

import './App.css';

const App = () => {

  // Viewing different screens
  const [showStart, setShowStart] = useState(1);
  const [showQuiz, setShowQuiz] = useState(0);
  const [showReplay, setShowReplay] = useState(0);

  // Questions data
  const [questions, setQuestions] = useState({});

  function startQuizClickHandler() {
    setShowStart(false);
    setShowReplay(false)
    setShowQuiz(true);
  };

  function goToReplayScreen() {
    setShowReplay(true);
    setShowQuiz(false);
    setShowStart(false);
  }

  function replayClickHandler() {
    setShowStart(true);
    setShowReplay(false);
    setShowQuiz(false);
  }

  useEffect(() => {
    fetch('/get-questions').then(res => res.json()).then(data => {
      setQuestions(data.questions)
    });
  }, []);

  return (
    <div className="App">

        { showStart ? <StartView clickHandler = {startQuizClickHandler}/> : null }
        { showQuiz ? <QuestionView questions={questions} goReplay={goToReplayScreen} /> : null }
        { showReplay ? <ReplayView clickHandler = {replayClickHandler} /> : null }

    </div>
  );
}

export default App;