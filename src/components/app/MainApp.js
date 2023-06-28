import React, { useState, useEffect } from 'react';
import QuestionBody from '../question/QuestionBody';
import ActionsContainer from '../actions/ActionsContainer';

import QUESTION_DATA from '../../data/questionData'

function MainApp() {

    const [questionData, setQuestionData] = useState([])
    const [testMetaData, setTestMetaData] = useState({})
    const [currentQuestion, setCurrentQuestion] = useState(1)

    const handleNextQuestion = () => {
        setCurrentQuestion((prev) => prev + 1)
    }

    useEffect(() => {
        setQuestionData(QUESTION_DATA)
        setCurrentQuestion(QUESTION_DATA[0].questionNumber)
        setTestMetaData(QUESTION_DATA.length)
    }, [QUESTION_DATA])

    return (
        <div>
            <QuestionBody currentQuestion={currentQuestion} />
            <ActionsContainer handleNextQuestion={handleNextQuestion} />
        </div>
    )
}

export default MainApp