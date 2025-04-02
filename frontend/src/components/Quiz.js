import React, { useState } from 'react'
import logo from './images/logo.png';
import "./Quiz.scss"


const quizData = [
    { title: "HTML Basics", difficulty: "easy" },
    { title: "CSS Intermediate", difficulty: "medium" },
    { title: "React Advanced", difficulty: "hard" },
  ];
  
  function getDifficultyColor(level) {
    switch (level) {
      case "easy":
        return "#4caf50"; 
      case "medium":
        return "#ff9800"; 
      case "hard":
        return "#f44336"; 
      default:
        return "#999";
    }
  }

  
  export default function Quiz() {
    const [isLogined, setIsLogined] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [quizTitle, setQuizTitle] = useState("")
    const [quizDifficulty, setQuizDifficulty] = useState("easy")
  
    const quizData = [
      { title: "Driving Test", difficulty: "easy" },
      { title: "Math Test", difficulty: "medium" },
      { title: "Programming Test", difficulty: "hard" }
    ]
  
    return (
      <div>
        <div className='header-wrapper'>
          <div className="header">
            <a href='#' className='header-logo'>
              <img src={logo} alt="logo" />
            </a>
            {isLogined ? (
              <div></div>
            ) : (
              <div className='logo-btns'>
                <a href="#" className='login-btn login-b'>Log In</a>
                <a href="#" className='login-btn registration-b'>Sign up</a>
              </div>
            )}
          </div>
        </div>
  
        <div className="quiz-actions">
          <button className="create-quiz-btn" onClick={() => setShowModal(true)}>
            + Create quiz
          </button>
        </div>
  
        <div className="quiz-cards-container">
  {quizData.map((quiz, index) => (
    <div className="quiz-card" key={index}>
      <div className="quiz-card-content">
        <h2 className="quiz-title">{quiz.title}</h2>
        <div className="quiz-buttons">
        <span
          className={`quiz-difficulty ${quiz.difficulty}`}
          style={{ backgroundColor: getDifficultyColor(quiz.difficulty) }}
        >
          {quiz.difficulty}
        </span>
      
      <button className="play-quiz-btn">Play</button>
      </div>
      </div>
    </div>
  ))}
</div>
  
        {showModal && (
          <div className="modal-overlay">
            <div className="modal">
              <h2 className="modal-title">Quiz creator</h2>
              <input
                type="text"
                placeholder="Quiz name"
                value={quizTitle}
                onChange={e => setQuizTitle(e.target.value)}
                className="modal-input"
              />
              <select
                className="modal-input"
                value={quizDifficulty}
                onChange={e => setQuizDifficulty(e.target.value)}
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
  
              <div className="modal-buttons">
                <button className="modal-btn confirm">Create</button>
                <button className="modal-btn cancel" onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
  