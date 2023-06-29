import React, { useEffect, useState, useReducer } from 'react';
import QuestionBody from '../question/QuestionBody';
import QuestionTrackerBoard from '../question/QuestionTrackerBoard';

import './styles/main-app.css'

import QUESTION_DATA from '../../data/questionData';

const testMetaInitialState = {
    questionData: [],
    questionsState: [],
    currentQuestion: {},
    currentQuestionIndex: 0,
};

const testMetaReducer = (state, action) => {
    switch (action.type) {
        case "SET-QUESTIONS":
            return { ...state, questionData: action.payload }
        case "SET-CURRENT-QUESTION":
            return { ...state, currentQuestion: action.payload }
        case 'SET-QUESTION-IDX':
            return { ...state, currentQuestionIndex: action.payload - 1 };
        case 'INCREMENT-QUESTION-IDX':
            return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1 };
        case 'DECREMENT-QUESTION-IDX':
            return { ...state, currentQuestionIndex: state.currentQuestionIndex - 1 };
        case 'SET-QUESTIONS-STATE':
            return { ...state, questionsState: action.payload };
        case 'UPDATE-QUESTIONs-STATE':
            return { ...state, questionsState: action.payload };
        default:
            return state;
    }
};

function MainApp() {

    const [testMetaState, testMetaDispatch] = useReducer(testMetaReducer, testMetaInitialState);

    const questionData = testMetaState.questionData;
    const questionStates = testMetaState.questionsState;
    const currentQuestion = testMetaState.currentQuestion;
    const currentQuestionIndex = testMetaState.currentQuestionIndex;
    // const totalNumberOfQuestions = testMetaState.questionData.length;

    const [questionResponses, setQuestionResponses] = useState([])

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questionData.length - 1) {
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
        testMetaDispatch({ type: "SET-QUESTIONS-STATE", payload: updatedQuestionsState });
    };


    const handleUpdateResponses = (questionId, res) => {
        setQuestionResponses({
            ...questionResponses,
            response: res.response
        })
    }

    const generateQuestionState = (data) => {
        let questionStateList = [];

        data.forEach((question) => {
            const questionState = {
                ...question,
                isAttempted: false,
                isFlag: false,
            }
            questionStateList.push(questionState)
        })

        return questionStateList;
    }

    const generateResponses = (data) => {
        let questionResponses = []

        data.forEach((question) => {
            const response = {
                questionNumber: question.questionNumber,
                response: ''
            }
            questionResponses.push(response)
        })

        return questionResponses;
    }

    useEffect(() => {
        const questionStateData = generateQuestionState(QUESTION_DATA)
        testMetaDispatch({ type: "SET-QUESTIONS-STATE", payload: questionStateData })
    }, QUESTION_DATA)

    useEffect(() => {
        const questionResponses = generateResponses(QUESTION_DATA)
        setQuestionResponses(questionResponses)
    }, [QUESTION_DATA])

    useEffect(() => {
        testMetaDispatch({ type: "SET-CURRENT-QUESTION", payload: questionData[currentQuestionIndex] })
    }, [currentQuestionIndex])

    useEffect(() => {
        testMetaDispatch({ type: "SET-QUESTIONS", payload: QUESTION_DATA })
        testMetaDispatch({ type: "SET-CURRENT-QUESTION", payload: QUESTION_DATA[0] })
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
                    currentQuestionState={questionStates[currentQuestionIndex]}
                    handleNextQuestion={handleNextQuestion}
                    handlePrevQuestion={handlePrevQuestion}
                    handleUpdateFlag={handleUpdateFlag}
                />
            </div>

        </div>
    )
}

export default MainApp