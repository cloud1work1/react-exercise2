import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Question from './Question';
import Gameboard from './Gameboard';
import LifeCycle from './LifeCycleTest';

function App() {
  const [playerScore, setPlayerScore] = useState(0);
  const [questions, setQuestions]= useState([
    {
      question: "What animal barks?",
      possibleAnswers: ["Dog", "Cat"],
      rightAnswer: "Dog",
      playerChoice: null
    },
    {
      question: "What animal is more closely related to a tiger?",
      possibleAnswers: ["Dog", "Cat"],
      rightAnswer: "Cat",
      playerChoice: null
    },
    {
      question: "What animal is more closely related to a wolf?",
      possibleAnswers: ["Dog", "Cat"],
      rightAnswer: "Dog",
      playerChoice: null
    },
    {
      question: "What animal is best known for playing fetch?",
      possibleAnswers: ["Dog", "Cat"],
      rightAnswer: "Dog",
      playerChoice: null
    }
  ]);
  const answerQuestion = (index, playerChoice) => {
    
      const selectedQuestion = questions[index];
      console.log(selectedQuestion);
      selectedQuestion.playerChoice = playerChoice;
      questions[index]=selectedQuestion;
      setQuestions(questions);
      let currentScore = playerScore;
      if(playerChoice===selectedQuestion.rightAnswer){
        currentScore++;
      } else {
        currentScore--;
      }
      setPlayerScore(currentScore);
  }
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <hr/>
      {
        questions.map((question, index) => (
          <Question question={question} key={index} index={index} answerQuestion={(playerChoice) => answerQuestion(index, playerChoice)}/>
        ))
      }
      <Gameboard/>
      {true && <LifeCycle/>}
    </div>
  );
}

export default App;
