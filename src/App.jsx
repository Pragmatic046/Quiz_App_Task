import { useState } from "react";
import "./App.css";

function App() {
  const [CurrentQuestion, setCurrentQuestion] = useState(0);
  const [Score, setScore] = useState(0);
  const [showScore, setshowScore] = useState(false);

  const Questions = [
    {
      question: "Where does sun rises ?",
      options: ["East", "West", "North", "South"],
      correctAnswer: "East",
    },
    {
      question: "Cpaital of Pakistan ?",
      options: ["Karachi", "Islamabad", "Lahore", "Peshawar"],
      correctAnswer: "Islamabad",
    },
    {
      question: "What is result of 2 + 1 ?",
      options: [5, 4, 3, 1],
      correctAnswer: 3,
    },
  ];

  function handleOptionClick(selectedOption) {
    if (selectedOption === Questions[CurrentQuestion].correctAnswer) {
      setScore(Score + 1);
    }
    const nextQuestion = CurrentQuestion + 1;
    if (nextQuestion < Questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setshowScore(true);
    }
  }

  return (
    <>
      <h1>Quiz Application</h1>
      {showScore ? (
        <>
          <h2>Your Score is {Score}</h2>
        </>
      ) : (
        <>
          <h3>Question {CurrentQuestion+1}</h3>
          <h2>{Questions[CurrentQuestion].question}</h2>
          {Questions[CurrentQuestion].options.map((option, index) => {
            return (
              <button key={index} onClick={() => handleOptionClick(option)}>
                {option}
              </button>
            );
          })}
        </>
      )}
    </>
  );
}

export default App;
