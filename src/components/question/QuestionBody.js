import React from 'react'

function QuestionBody(props) {

    const { currentQuestion } = props;

    return (
        <div>This is the current question {currentQuestion}</div>
    )
}

export default QuestionBody