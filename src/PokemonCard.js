import React from 'react';
import './PokemonCard.css';
import useFlip from './hooks';

function PokemonCard({ front, back, name, stats }) {
  const [isFlipped, toggleFlip] = useFlip();

  return (
    <div onClick={toggleFlip} className="PokemonCard Card">
      {isFlipped ? (
        <div className="PokemonCard-back">
          <img src={back} alt={`back of ${name}`} />
        </div>
      ) : (
        <div className="PokemonCard-front">
          <img src={front} alt={name} />
          <div className="PokemonCard-info">
            <p className="PokemonCard-name">{name}</p>
            <ul className="PokemonCard-stats">
              {stats.map(stat => (
                <li key={stat.name}>
                  <em>{stat.name}</em>: {stat.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default PokemonCard;
