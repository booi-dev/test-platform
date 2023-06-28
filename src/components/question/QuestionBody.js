import React from 'react';

import { checkbox, checkboxFill, closeBtnIcon } from '../../assets/icons'

import './styles/question-body.css'

function QuestionBody(props) {

    const { currentQuestion } = props;

    return (
        <div className='question-body'>
            <div> Question Number: {currentQuestion?.questionNumber} </div>
            <div className='question-body__question-box'> {currentQuestion?.questionBody} </div>
            <div className='question-body__option-container'>
                {currentQuestion.responseOptions?.map((response) => (
                    <div key={response.id} className='question-body__option'>
                        <div>
                            <img src={checkbox} />
                        </div>
                        <h2 className='question-body__option-line'> {response.optionBody} </h2>
                    </div>
                ))
                }
            </div>

        </div>
    )
}

export default QuestionBody;