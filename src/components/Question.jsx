import React, { useState } from "react";
import Timer from "./Timer";
import Answers from "./Answers";
import QUESTIONS from "./../questions";
import Icon from "./Icon";
import ProgressBar from "./ProgressBar";
import OverallProgress from "./OverallProgress";

const Question = ({
  index,
  onSelectAnswer,
  onSkipAnswer,
  correctAnswers,
  attempted,
}) => {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 10000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  const handleSelectAnswer = (selectedAnswer) => {
    const isCorrect = QUESTIONS[index].answers[0] === selectedAnswer;
    setAnswer({
      selectedAnswer,
      isCorrect,
    });
    setTimeout(() => {
      onSelectAnswer(selectedAnswer, isCorrect);
    }, 2000);
  };

  let answerState = "";
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }
  const percentage = (index / 20) * 100;
  return (
    <div id="question">
      <OverallProgress
        length={QUESTIONS.length}
        percentage={percentage}
        count={index + 1}
      />
      <div>
        <h2>{QUESTIONS[index].category}</h2>
        <Timer
          key={timer}
          timeout={timer}
          onTimeout={answer.selectedAnswer === "" ? onSkipAnswer : null}
          mode={answerState}
        />
      </div>

      <Icon difficulty={QUESTIONS[index].difficulty} />
      <h3>
        {QUESTIONS[index].id}: {QUESTIONS[index].question}
      </h3>

      <Answers
        answers={QUESTIONS[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
      <ProgressBar
        correctAnswers={correctAnswers}
        attempted={attempted}
        totalQuestions={QUESTIONS.length}
      />
    </div>
  );
};

export default Question;
