import React from 'react';
import ActionsContainer from '../actions/ActionsContainer';

import { checkbox, checkboxFill, closeBtnIcon } from '../../assets/icons'

import './styles/question-body.css'

function QuestionBody(props) {

    const {
        currentQuestion,
        handleNextQuestion,
        handlePrevQuestion,
        handleUpdateFlag,
        handleUpdateResponseData,
        handleUpdateQuestionResponse } = props;

    // console.log(currentQuestion)

    const handleSelectOption = (qId, res) => {
        handleUpdateResponseData(qId, res)
        handleUpdateQuestionResponse(qId, res)
    }

    return (
        <div className={`question-body`}>
            <div className='question-body__question-number'> Question Number: {currentQuestion?.questionNumber} </div>
            <div className='question-body__question-box'> {currentQuestion?.questionBody} </div>
            <div className='question-body__option-container'>
                {currentQuestion.responseOptions?.map((r) => (
                    <div key={r.id} className='question-body__option'>
                        <button onClick={
                            () => handleSelectOption(currentQuestion.id, { response: r.option })
                        }>
                            {
                                currentQuestion.response === r.option
                                    ? <img src={checkboxFill} />
                                    : <img src={checkbox} />
                            }
                        </button>
                        <h2 className='question-body__option-line'> {r.optionBody} </h2>
                    </div>
                ))
                }
            </div>
            <ActionsContainer
                currentQuestionId={currentQuestion.id}
                currentQuestion={currentQuestion}
                handleNextQuestion={handleNextQuestion}
                handlePrevQuestion={handlePrevQuestion}
                handleUpdateFlag={handleUpdateFlag}
            />
        </div>
    )
}

export default QuestionBody;