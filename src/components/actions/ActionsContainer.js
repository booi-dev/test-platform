import React from 'react';
import './styles/actions-container.css';

import { closeBtnIcon } from '../../assets/icons';

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

                <button className='actions-box__btn quit hide-small'
                    onClick={handleNextQuestion}>QUIT</button>

                <div className='actions-box__first'>
                    <button className='actions-box__btn'
                        onClick={handlePrevQuestion}>PREV</button>

                    <button className='actions-box__btn'
                        onClick={() => handleUpdateFlag(currentQuestionId)}>
                        {currentQuestion.isFlag
                            ? 'UNFLAG'
                            : 'FLAG'}
                    </button>

                    <button className='actions-box__btn'
                        onClick={handleNextQuestion}>NEXT</button>
                </div>

                <div className='actions-box__second'>
                    <button className='actions-box__btn quit hide-big'
                        onClick={handleNextQuestion}>QUIT</button>

                    <button className='actions-box__btn submit'
                        onClick={handleNextQuestion}>SUBMIT</button>
                </div>

            </div>

        </div>
    )
}

export default ActionsContainer;