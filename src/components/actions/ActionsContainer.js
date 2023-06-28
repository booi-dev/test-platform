import React from 'react';
import './styles/actions-container.css'

function ActionsContainer(props) {

    const { handleNextQuestion } = props;

    return (
        <div className='actions-container'>
            <button className='actions-container__btn' onClick={handleNextQuestion}>PREV</button>
            <button className='actions-container__btn' >ATTEMPT LATER</button>
            <button className='actions-container__btn' onClick={handleNextQuestion}>NEXT</button>
        </div>
    )
}

export default ActionsContainer;