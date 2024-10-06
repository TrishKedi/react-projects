import {useState, useCallback} from "react";
import QUESTIONS from "../questions";
import quizComplete from "../assets/quiz-complete.png"
import QuestionTimer from "./QuestionTimer";

export default function  Quiz(){
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const currentQuestion = QUESTIONS[activeQuestionIndex];

    const quizIsComplete = activeQuestionIndex === QUESTIONS.length

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer){
        setUserAnswers((prevUserAnswers) => {
            return [ ...prevUserAnswers, selectedAnswer]
        });
    }, []) 

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer] )

    if (quizIsComplete) {

        return (
            <div id="summary">
                <img src={quizComplete} alt="trophy"/>
            </div>

        )
    }

    const shuffledAnswers = [...currentQuestion.answers];
    shuffledAnswers.sort(() => Math.random() - 0.5);

    return (
        <div id="quiz">
            <div id="question">
                <QuestionTimer key={activeQuestionIndex} timeout={10000} onTimeOut={handleSkipAnswer}/>
                <h2>{currentQuestion.text}</h2>
                <ul id="answers">
                {shuffledAnswers.map((answer) => (
                    <li key={answer} className="answer">
                        <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                    </li>
                ))}
                </ul>
            </div>
        </div>

        
    );
}