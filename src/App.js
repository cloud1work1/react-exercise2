import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Question from './Question';

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
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <hr/>
      {
        questions.map(question => (
          <Question question={question}/>
        ))
      }
    </div>
  );
}

export default App;
