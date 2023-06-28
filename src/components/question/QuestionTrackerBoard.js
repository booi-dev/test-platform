import React from 'react';

import './styles/question-tracker-board.css'

function QuestionTrackerBoard(props) {

    const {
        currentQuestion,
        questionStates,
    } = props;

    return (
        <div className='question-tracker-board'>
            <div className='question-tracker__indicator-box-container'>
                {questionStates.map((q) => (
                    <div key={q.question.id}
                        className={`question-tracker__indicator-box
                        ${currentQuestion.questionNumber === q.question.questionNumber ? "active" : ""}
                        ${q.isFlag ? "flag" : ""}
                        `}>
                        {q.question.questionNumber}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QuestionTrackerBoard;