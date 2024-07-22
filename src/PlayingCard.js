import React from 'react';
import './PlayingCard.css';
import useFlip from './hooks';

function PlayingCard({ front, back = 'https://deckofcardsapi.com/static/img/back.png' }) {
  const [isFlipped, toggleFlip] = useFlip();

  return (
    <img
      src={isFlipped ? back : front}
      alt="playing card"
      onClick={toggleFlip}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;