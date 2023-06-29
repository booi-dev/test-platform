import React from 'react';

import './styles/question-tracker-board.css'

function QuestionTrackerBoard(props) {

    const {
        currentQuestion,
        questionStates,
        setCurrentQuestion
    } = props;

    const handleSettingCurrentQuestion = (questionNumber) => {
        setCurrentQuestion(questionNumber)
    }

    return (
        <div className='question-tracker-board'>
            <div className='question-tracker__indicator-box-container'>
                {questionStates.map((q) => (
                    <button key={q.id}
                        className={`question-tracker__indicator-box
                        ${currentQuestion.questionNumber === q.questionNumber ? "active" : ""}
                        ${q.isAttempted ? "attempted" : ""}
                        ${q.isFlag ? "flag" : ""}
                        `}
                        onClick={() => handleSettingCurrentQuestion(q.questionNumber)}
                    >
                        {q.questionNumber}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default QuestionTrackerBoard;