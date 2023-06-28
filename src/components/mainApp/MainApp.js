import React, { useState, useEffect } from 'react';
import QuestionBody from '../question/QuestionBody';
import ActionsContainer from '../actions/ActionsContainer';

import QUESTION_DATA from '../../data/questionData'

function MainApp() {

    const [questionData, setQuestionData] = useState([])
    const [testMetaData, setTestMetaData] = useState({})
    const [currentQuestion, setCurrentQuestion] = useState({})
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1)

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questionData.length) {
            setCurrentQuestionIndex((prev) => prev + 1)
            setCurrentQuestion(questionData[currentQuestionIndex - 1 + 1])
        }
    }

    const handlePrevQuestion = () => {
        if (currentQuestionIndex > 1) {
            setCurrentQuestionIndex((prev) => prev - 1)
            setCurrentQuestion(questionData[currentQuestionIndex - 1 - 1])
        }
    }


    useEffect(() => {
        setQuestionData(QUESTION_DATA)
        setCurrentQuestion(QUESTION_DATA[0])
        setTestMetaData(QUESTION_DATA.length)
    }, [QUESTION_DATA])

    return (
        <div>
            <QuestionBody currentQuestion={currentQuestion} />
            <ActionsContainer
                handleNextQuestion={handleNextQuestion}
                handlePrevQuestion={handlePrevQuestion}
            />
        </div>
    )
}

export default MainApp