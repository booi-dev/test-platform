import React from 'react';
import './styles/actions-container.css'

function ActionsContainer(props) {

    const { currentQuestionId,
        currentQuestion,
        handleNextQuestion,
        handlePrevQuestion,
        handleUpdateFlag } = props;

    if (!currentQuestion) return null

    return (
        <div className='actions-box-container'>
            <div className='actions-box'>
                <div className='actions-box__top'>
                    <button className='actions-box__btn'
                        onClick={handlePrevQuestion}>PREV</button>
                    <button className='actions-box__btn'
                        onClick={() => handleUpdateFlag(currentQuestionId)}
                    >
                        {currentQuestion.isFlag
                            ? 'UNFLAG'
                            : 'FLAG'}

                    </button>

                    <button className='actions-box__btn'
                        onClick={handleNextQuestion}>NEXT</button>
                </div>

                <button className='actions-box__btn submit'
                    onClick={handleNextQuestion}>SUBMIT</button>
            </div>

        </div>
    )
}

export default ActionsContainer;