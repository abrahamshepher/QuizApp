import React, { useState } from "react";
import Timer from "./Timer";
import Answers from "./Answers";
import QUESTIONS from "./../questions";
import Icon from "./Icon";
import ProgressBar from "./ProgressBar";

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
      <div>
        <h1>
          Questions: {index + 1}/ {QUESTIONS.length}
        </h1>
        <div
          style={{
            height: "20px",
            width: `${percentage}%`,
            backgroundColor: "#e0e0df",
            borderRadius: "50px",
            margin: "20px 0",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "100%",
              backgroundColor: "#f44336",
              borderRadius: "inherit",
              textAlign: "right",
              transition: "width 0.5s ease-in-out",
            }}
          >
            <span
              style={{
                padding: "5px",
                color: "white",
                fontWeight: "bold",
              }}
            ></span>
          </div>
        </div>
      </div>
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
