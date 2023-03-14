import { useState } from 'react';
import './App.css';

const cardPairs = [
  { question: 'What is the capital of France?', answer: 'Paris' },
  { question: 'What is the largest country in the world?', answer: 'Russia' },
  { question: 'What is the smallest country in the world?', answer: 'Vatican City' },
  { question: 'What is the currency of Japan?', answer: 'Yen' },
  { question: 'Who is the CEO of Tesla?', answer: 'Elon Musk' },
  { question: 'What is the capital of France?', answer: 'Paris' },
  { question: 'What is the largest country in the world?', answer: 'Russia' },
  { question: 'What is the smallest country in the world?', answer: 'Vatican City' },
  { question: 'What is the currency of Japan?', answer: 'Yen' },
  { question: 'Who is the CEO of Tesla?', answer: 'Elon Musk' },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userGuess, setUserGuess] = useState('');
  const [streak, setStreak] = useState({ current: 0, longest: 0 });
  const [masteredCards, setMasteredCards] = useState([]);

  const currentCard = cardPairs[currentIndex];

  const handleNext = () => {
    setShowAnswer(false);
    setUserGuess('');
    setCurrentIndex((currentIndex + 1) % cardPairs.length);
  };

  const handlePrev = () => {
    setShowAnswer(false);
    setUserGuess('');
    setCurrentIndex((currentIndex - 1 + cardPairs.length) % cardPairs.length);
  };

  const handleShuffle = () => {
    setShowAnswer(false);
    setUserGuess('');
    setMasteredCards([]);
    setStreak({ current: 0, longest: streak.longest });
    setCurrentIndex(Math.floor(Math.random() * cardPairs.length));
  };

  const handleGuess = () => {
    if (userGuess.toLowerCase() === currentCard.answer.toLowerCase()) {
      setStreak({ current: streak.current + 1, longest: Math.max(streak.current + 1, streak.longest) });
      setMasteredCards([...masteredCards, currentCard]);
      setShowAnswer(true);
    } else {
      setStreak({ current: 0, longest: streak.longest });
      setShowAnswer(true);
    }
  };

  return (
    <div className='App'>
      <h1>Flashcard</h1>
      <p>{`Set: Geography Trivia (10 cards)`}</p>
      <div className=''>
        <p>{`Card ${currentIndex + 1} of ${cardPairs.length}`}</p>
        <h2>{currentCard.question}</h2>
        {showAnswer ? <p>{currentCard.answer}</p> : <input type="text" value={userGuess} onChange={(e) => setUserGuess(e.target.value)} />}
        <button onClick={handleGuess}>Submit</button>
        <p>{`Current streak: ${streak.current}`}</p>
        <p>{`Longest streak: ${streak.longest}`}</p>
        <button onClick={handlePrev}>Back</button>
        <button onClick={handleNext}>Next</button>
        <button onClick={handleShuffle}>Shuffle</button>
        {masteredCards.length > 0 && (
          <div>
            <h3>Mastered Cards:</h3>
            <ul>
              {masteredCards.map((card) => (
                <li key={card.question}>
                  {card.question} - {card.answer}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
