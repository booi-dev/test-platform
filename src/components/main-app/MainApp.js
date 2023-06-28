import React, { useState, useEffect, useReducer } from 'react';
import QuestionBody from '../question/QuestionBody';
import QuestionTrackerBoard from '../question/QuestionTrackerBoard';
import ActionsContainer from '../actions/ActionsContainer';

import './styles/main-app.css'

import QUESTION_DATA from '../../data/questionData';


const testMetaReducer = (state, action) => {
    switch (action.type) {

        case "SET-QUESTIONS":
            return { ...state, questionData: action.payload }
        case "SET-CURRENT-QUESTIONS":
            return { ...state, currentQuestion: action.payload }
        case 'INCREMENT-QUESTION-IDX':
            return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1 };
        case 'DECREMENT-QUESTION-IDX':
            return { ...state, currentQuestionIndex: state.currentQuestionIndex - 1 };
        case 'ALTER-CURRENT-QUESTION':
            return { ...state, currentQuestion: action.payload };
        case 'UPDATE-QUESTION-STATE':
            return { ...state, currentQuestion: action.payload };
        default:
            return state;
    }
};

const testMetaInitialState = {
    questionData: [],
    questionsState: [],
    currentQuestion: {},
    currentQuestionIndex: 1,
};

function MainApp() {

    const [testMetaState, testMetaDispatch] = useReducer(testMetaReducer, testMetaInitialState);

    const questionData = testMetaState.questionData;
    const currentQuestion = testMetaState.currentQuestion;
    const currentQuestionIndex = testMetaState.currentQuestionIndex;

    console.log(currentQuestion)

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questionData.length) {
            testMetaDispatch({ type: "INCREMENT-QUESTION-IDX" })
        }
    }

    const handlePrevQuestion = () => {
        if (currentQuestionIndex > 1) {
            testMetaDispatch({ type: "DECREMENT-QUESTION-IDX" })
        }
    }

    useEffect(() => {
        testMetaDispatch({ type: "SET-QUESTIONS", payload: QUESTION_DATA })
        testMetaDispatch({ type: "SET-CURRENT-QUESTIONS", payload: QUESTION_DATA[0] })
    }, [QUESTION_DATA])

    return (
        <div className='main-app'>
            <div className='main-app__body'>
                <QuestionTrackerBoard />
                <QuestionBody
                    currentQuestion={currentQuestion}
                    currentQuestionIndex={currentQuestionIndex}
                />
            </div>
            <ActionsContainer
                handleNextQuestion={handleNextQuestion}
                handlePrevQuestion={handlePrevQuestion}
            />
        </div>
    )
}

export default MainApp