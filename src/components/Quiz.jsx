import { useState, useCallback } from "react";
import QUESTIONS from "./../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback((selectedAnswer, isCorrect) => {
    setUserAnswers((prev) => [...prev, selectedAnswer]);
    if (isCorrect) {
      setCorrectAnswers((prev) => prev + 1);
    }
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null, false),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return (
      <Summary userAnswers={userAnswers} correctAnswers={correctAnswers} />
    );
  }

  return (
    <div id="quiz">
      
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
        correctAnswers={correctAnswers}
        attempted={userAnswers.length}
      />
    </div>
  );
};

export default Quiz;
