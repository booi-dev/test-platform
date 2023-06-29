import React, { useEffect, useState, useReducer } from 'react';
import QuestionBody from '../question/QuestionBody';
import QuestionTrackerBoard from '../question/QuestionTrackerBoard';

import './styles/main-app.css'

import QUESTION_DATA from '../../data/questionData';

const testMetaInitialState = {
    questionStates: [],
    currentQuestion: {},
    currentQuestionIndex: 0,
};

const testMetaReducer = (state, action) => {
    switch (action.type) {
        case "SET-QUESTIONS":
            return { ...state, questionStates: action.payload }
        case "SET-CURRENT-QUESTION":
            return { ...state, currentQuestion: action.payload }
        case 'SET-QUESTION-IDX':
            return { ...state, currentQuestionIndex: action.payload - 1 };
        case 'INCREMENT-QUESTION-IDX':
            return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1 };
        case 'DECREMENT-QUESTION-IDX':
            return { ...state, currentQuestionIndex: state.currentQuestionIndex - 1 };
        default:
            return state;
    }
};

function MainApp() {

    const [questionResponses, setQuestionResponses] = useState([])

    const [testMetaState, testMetaDispatch] = useReducer(testMetaReducer, testMetaInitialState);

    const questionStates = testMetaState.questionStates;
    const currentQuestion = testMetaState.currentQuestion;
    const currentQuestionIndex = testMetaState.currentQuestionIndex;

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questionStates.length - 1) {
            testMetaDispatch({ type: "INCREMENT-QUESTION-IDX" })
        }
    }

    const handlePrevQuestion = () => {
        if (currentQuestionIndex > 0) {
            testMetaDispatch({ type: "DECREMENT-QUESTION-IDX" })
        }
    }

    const setCurrentQuestion = (tobeSetIdx) => {
        testMetaDispatch({ type: "SET-QUESTION-IDX", payload: tobeSetIdx })
    }

    const handleUpdateFlag = (questionId) => {
        const updatedQuestionsState = questionStates.map((q) => {
            if (q.id === questionId) {
                return {
                    ...q,
                    isFlag: !q.isFlag
                };
            } else {
                return { ...q };
            }
        });
        testMetaDispatch({ type: "SET-QUESTIONS", payload: updatedQuestionsState });
    };


    const handleUpdateResponseData = (questionId, res) => {

        const updatedResponses = questionResponses.map((q) => {
            if (q.id === questionId) {
                return {
                    ...q,
                    response: res.response,
                };
            } else {
                return { ...q };
            }
        })

        setQuestionResponses(updatedResponses);
    }

    const handleUpdateQuestionResponse = (questionId, res) => {

        const updatedResponses = questionStates.map((q) => {
            if (q.id === questionId) {
                return {
                    ...q,
                    response: res.response,
                    isAttempted: true

                };
            } else {
                return { ...q };
            }
        })
        testMetaDispatch({ type: "SET-QUESTIONS", payload: updatedResponses });
    }

    const generateQuestionStates = (data) => {
        let newQuestionState = [];

        data.forEach((question) => {
            const questionState = {
                ...question,
                isAttempted: false,
                isFlag: false,
                response: null,
            }
            newQuestionState.push(questionState)
        })

        return newQuestionState;
    }

    const generateResponses = (data) => {
        let questionResponses = []

        data.forEach((q) => {
            const response = {
                id: q.id,
                questionNumber: q.questionNumber,
                response: null,
                isCorrect: null
            }
            questionResponses.push(response)
        })

        return questionResponses;
    }

    useEffect(() => {
        testMetaDispatch({ type: "SET-CURRENT-QUESTION", payload: questionStates[currentQuestionIndex] })
    }, [currentQuestionIndex, questionStates])

    useEffect(() => {
        const newQuestionResponses = generateResponses(QUESTION_DATA)
        setQuestionResponses(newQuestionResponses);
    }, [QUESTION_DATA])

    useEffect(() => {
        const newQuestionStates = generateQuestionStates(QUESTION_DATA)
        testMetaDispatch({ type: "SET-QUESTIONS", payload: newQuestionStates })
        testMetaDispatch({ type: "SET-CURRENT-QUESTION", payload: newQuestionStates[0] })
    }, [QUESTION_DATA])

    return (
        <div className='main-app'>
            <div className='main-app__body'>
                <QuestionTrackerBoard
                    currentQuestion={currentQuestion}
                    questionStates={questionStates}
                    setCurrentQuestion={setCurrentQuestion}
                />
                <QuestionBody
                    currentQuestionIndex={currentQuestionIndex}
                    currentQuestion={currentQuestion}
                    handleNextQuestion={handleNextQuestion}
                    handlePrevQuestion={handlePrevQuestion}
                    handleUpdateFlag={handleUpdateFlag}
                    handleUpdateResponseData={handleUpdateResponseData}
                    handleUpdateQuestionResponse={handleUpdateQuestionResponse}
                />
            </div>

        </div>
    )
}

export default MainApp