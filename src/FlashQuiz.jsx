import React from 'react';
import './App.css';

function FlashQuiz({ question, answer, showAnswer, onCardClick, image, color }) {
  const cardStyle = {backgroundColor: color};

  return (

    <div className="Card" style={cardStyle} onClick={onCardClick}>
        {image && <img src={image} alt={question} className="Image" />}
        <div className="Question">{question}</div>
            <div>  
                {showAnswer && <div className="Answer">{answer}</div>}
            </div>
    </div>

  );
}

export default FlashQuiz;
