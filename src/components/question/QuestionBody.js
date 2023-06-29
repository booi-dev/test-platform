import React from 'react';
import ActionsContainer from '../actions/ActionsContainer';

import { checkbox, checkboxFill, closeBtnIcon } from '../../assets/icons'

import './styles/question-body.css'

function QuestionBody(props) {

    const { currentQuestion,
        currentQuestionState,
        handleNextQuestion,
        handlePrevQuestion,
        handleUpdateFlag } = props;

    // console.log(currentQuestionState)

    return (
        <div className={`question-body`}>
            <div className='question-body__question-number'> Question Number: {currentQuestion?.questionNumber} </div>
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
            <ActionsContainer
                currentQuestionId={currentQuestion.id}
                currentQuestionState={currentQuestionState}
                handleNextQuestion={handleNextQuestion}
                handlePrevQuestion={handlePrevQuestion}
                handleUpdateFlag={handleUpdateFlag}
            />
        </div>
    )
}

export default QuestionBody;