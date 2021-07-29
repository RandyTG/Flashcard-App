import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { readDeck } from "../utils/api";
import Card from "./Card";

function StudyDeck({ setError }) {
  const [deck, setDeck] = useState([]);
  const [card, setCard] = useState([]);
  const [currentCard, setCurrentCard] = useState(0);
  const [flip, setFlip] = useState(false);
  const { deckId } = useParams();
  const { cards } = deck;
  const history = useHistory();

  //fetches current deck
  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId).then(setDeck).catch(setError);
    return () => abortController.abort();
  }, [deckId]);

  //re-reruns everytime deck changes and maps if it has length >2
  useEffect(() => {
    const abortController = new AbortController();
    if (Object.keys(deck).length && cards.length > 2) {
      console.log(deck);
      setCard(
        cards.map((card, index) => (
          <Card
            key={card.id}
            card={card}
            index={index}
            cards={cards}
            flip={flip}
            currentCard={currentCard}
            setFlip={setFlip}
            setCurrentCard={setCurrentCard}
          />
        ))
      );
    } else if (Object.keys(deck).length) {
      setCard([
        <div>
          <h3>Not enough cards.</h3>
          <p>
            You need at least 3 cards to study. There are {cards.length} cards
            in this deck.
          </p>
          <button
            onClick={() => history.push(`/decks/${deckId}/cards/new`)}
            className="mr-2 btn btn-primary"
          >
            Add Cards
          </button>
        </div>,
      ]);
    }
    return () => abortController.abort();
  }, [deck, flip]);

  //screen render
  return (
    <main>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href={`/decks/${deckId}`}>{deck.name}</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Study
          </li>
        </ol>
      </nav>
      <div>
        <h2>Study: {deck.name}</h2>
        {card[currentCard]}
      </div>
    </main>
  );
}

export default StudyDeck;
