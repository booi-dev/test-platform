import React, { useState, useEffect } from 'react';
import QuestionBody from '../../components/QuestionBody';

import './main-body.css';

function MainBody(props) {

    const { questionData } = props;

    const [currentQuestion, setCurrentQuestion] = useState(1)

    return (
        <div className='main-body'>
            <h2>This is main section</h2>
            <QuestionBody
                currentQuestion={currentQuestion}
            />
        </div>
    )
}

export default MainBody