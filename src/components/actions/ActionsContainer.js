import React from 'react';
import './styles/actions-container.css'

function ActionsContainer(props) {

    const { handleNextQuestion, handlePrevQuestion } = props;

    return (
        <div className='actions-box-container'>
            <div className='actions-box'>
                <div className='actions-box__top'>
                    <button className='actions-box__btn'
                        onClick={handlePrevQuestion}>PREV</button>
                    <button className='actions-box__btn' > FLAG </button>
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