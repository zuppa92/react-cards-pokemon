import React from "react";
import { v1 as uuid } from "uuid";
import useAxios from "./useAxios";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function PlayingCardList() {
  const [cards, addCard] = useAxios("https://deckofcardsapi.com/api/deck/new/draw/");

  const addNewCard = () => {
    addCard();
  };

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={addNewCard}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

PlayingCardList.defaultProps = {};

export default PlayingCardList;
