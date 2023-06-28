import React from 'react';

import { checkbox, checkboxFill, checkBoxPink, checkFillPink, closeBtnIcon, underScoreIcon } from '../../assets/icons'

import './styles/question-body.css'

function QuestionBody(props) {

    const { currentQuestion, currentQuestionIndex } = props;

    return (
        <div className='question-body'>
            <h2> Question Number: {currentQuestionIndex} </h2>
            <h2> {currentQuestion.questionBody} </h2>
            <div className='question-body__option-container'>
                {currentQuestion.responseOptions?.map((response) => (
                    <div key={response.id} className='question-body__option'>
                        <div>
                            <img src={checkbox} />
                        </div>
                        <h2> {response.optionBody} </h2>
                    </div>
                ))
                }
            </div>

        </div>
    )
}

export default QuestionBody