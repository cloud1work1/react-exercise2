import {useState} from 'react';
function Question(props) {
    const [show, setShow]=useState('')
    const handleOnClick = (val) => {
        console.log(val);
        props.answerQuestion(val);
        setShow(props.question.rightAnswer===val?'y':'n')
    }
    return (
        <div className="question-display">
            <p className="question">
               {props.index}. {props.question.question}
            </p>
            <br />
            <button className="question-choice" onClick={() => handleOnClick(props.question.possibleAnswers[0])}>
                {props.question.possibleAnswers[0]}
            </button>
            <button className="question-choice" onClick={() => handleOnClick(props.question.possibleAnswers[1])}>
                {props.question.possibleAnswers[1]}
            </button>
            <br />
            <p className="result-correct" style={{display: show==='y'?'block':'none'}}>
                Your answer is correct!
            </p>
            <p className="result-incorrect" style={{display: show==='n'?'block':'none'}}>
                Your answer is incorrect!
            </p>
        </div>
    )
}

export default Question;