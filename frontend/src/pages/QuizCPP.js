import React, { useState, useEffect } from "react";
import { quizData } from "./QuizData";
import "../styles/quiz.css";
import { updateProgress } from "../utils/statsHelper";

const CPPQuiz = () => {
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [clickedOption, setClickedOption] = useState(null);

    const langType = "cpp";

  useEffect(() => {
    const prepareQuestions = () => {
      // 1. Create a copy of the 100 questions
      let allQuestions = [...quizData.cpp];

      // 2. Shuffle the entire pool (Fisher-Yates)
      for (let i = allQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
      }

      // 3. Pick only the first 20 from the shuffled pool
      const selectedQuestions = allQuestions.slice(0, 10);
      setShuffledQuestions(selectedQuestions);
    };

    prepareQuestions();
  }, []);

  const handleAnswer = (selectedOption) => {
  if (clickedOption !== null) return; // Prevent double-clicking
  
  setClickedOption(selectedOption);

  // 1. Calculate the score immediately
  const isCorrect = selectedOption === shuffledQuestions[currentQuestion].answer;
  const newScore = isCorrect ? score + 1 : score;

  if (isCorrect) {
    setScore(newScore);
  }

  // 2. Wait for the visual feedback (green/red highlight)
  setTimeout(() => {
    const nextQuestion = currentQuestion + 1;
    
    if (nextQuestion < shuffledQuestions.length) {
      // Move to next question
      setCurrentQuestion(nextQuestion);
      setClickedOption(null);
    } else {
      // 3. QUIZ FINISHED: Update Global Progress
      // Pass the language name (e.g., 'c', 'html') to the helper
      if (newScore >= 8) {
        updateProgress(langType); 
      }
      setShowResult(true);
    }
  }, 600);
};

  if (shuffledQuestions.length === 0) {
    return (
      <div className="quiz-container">
        <div className="quiz-card">
          <h2 style={{color: "#cbd5e1"}}>Initializing Quiz Pool...</h2>
        </div>
      </div>
    );
  }

  const progress = ((currentQuestion + 1) / shuffledQuestions.length) * 100;

  return (
    <div className="quiz-container">
      {showResult ? (
        <div className="result-card">
          <h2>Quiz Completed! 🎉</h2>
          <p>You answered 20 random questions.</p>
          <div className="score-circle">
            {Math.round((score / shuffledQuestions.length) * 100)}%
          </div>
          <p>Score: {score} / {shuffledQuestions.length}</p>
          <button onClick={() => window.location.reload()}>New Random Quiz</button>
        </div>
      ) : (
        <div className="quiz-card">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
          
          <div className="question-header">
            <h3>Question {currentQuestion + 1} of 10</h3>
          </div>

          <h2 className="question-text">{shuffledQuestions[currentQuestion].question}</h2>

          <div className="options-grid">
            {shuffledQuestions[currentQuestion].options.map((option, i) => (
              <button
                key={i}
                disabled={clickedOption !== null}
                className={`option-button ${
                  clickedOption === option 
                    ? option === shuffledQuestions[currentQuestion].answer 
                      ? "correct" 
                      : "wrong" 
                    : ""
                }`}
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CPPQuiz;