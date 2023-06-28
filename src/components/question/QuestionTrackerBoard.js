import React from 'react';

import './styles/question-tracker-board.css'

function QuestionTrackerBoard(props) {

    const {
        currentQuestion,
        questionState,
    } = props;

    return (
        <div className='question-tracker-board'>
            <div className='question-tracker__indicator-box-container'>
                {questionState.map((q) => (
                    <div key={q.question.id}
                        className={`question-tracker__indicator-box
                        ${currentQuestion.questionNumber === q.question.questionNumber ? "active" : ""}
                        `}>
                        {q.question.questionNumber}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QuestionTrackerBoard;