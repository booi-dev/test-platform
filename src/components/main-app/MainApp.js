import React, { useEffect, useReducer } from 'react';
import QuestionBody from '../question/QuestionBody';
import QuestionTrackerBoard from '../question/QuestionTrackerBoard';
import ActionsContainer from '../actions/ActionsContainer';

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

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questionData.length - 1) {
            testMetaDispatch({ type: "INCREMENT-QUESTION-IDX" })
            testMetaDispatch({ type: "SET-CURRENT-QUESTION", payload: questionData[currentQuestionIndex + 1] })
        }
    }

    const handlePrevQuestion = () => {
        if (currentQuestionIndex > 0) {
            testMetaDispatch({ type: "DECREMENT-QUESTION-IDX" })
            testMetaDispatch({ type: "SET-CURRENT-QUESTION", payload: questionData[currentQuestionIndex - 1] })
        }
    }

    const handleUpdateFlag = (questionId) => {
        const updatedQuestionsState = questionStates.map((q) => {
            if (q.question.id === questionId) {
                return {
                    ...q,
                    isFlag: !q.isFlag
                };
            } else {
                return { ...q };
            }
        });
        console.log(updatedQuestionsState)

        testMetaDispatch({ type: "SET-QUESTIONS-STATE", payload: updatedQuestionsState });
    };


    const generateQuestionState = (data) => {

        let questionStateList = [];

        data.forEach((question) => {
            const questionState = {
                question: question,
                isAttempted: false,
                isFlag: false,
            }
            questionStateList.push(questionState)
        })

        return questionStateList;
    }

    useEffect(() => {
        const questionStateData = generateQuestionState(QUESTION_DATA)
        testMetaDispatch({ type: "SET-QUESTIONS-STATE", payload: questionStateData })

    }, QUESTION_DATA)

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
                />
                <QuestionBody
                    currentQuestion={currentQuestion}
                    currentQuestionIndex={currentQuestionIndex}
                    handleNextQuestion={handleNextQuestion}
                    handlePrevQuestion={handlePrevQuestion}
                    handleUpdateFlag={handleUpdateFlag}
                />
            </div>

        </div>
    )
}

export default MainApp