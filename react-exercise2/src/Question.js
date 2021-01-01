function Question(props) {
    return (
        <div className="question-display">
            <p className="question">
                {props.question.question}
            </p>
            <br />
            <button className="question-choice">
                {props.question.possibleAnswers[0]}
            </button>
            <button className="question-choice">
                {props.question.possibleAnswers[1]}
            </button>
            <br />
            <p className="result-correct">
                Your answer is correct!
            </p>
            <p className="result-incorrect">
                Your answer is incorrect!
            </p>
        </div>
    )
}

export default Question;