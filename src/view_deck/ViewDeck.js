import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import { readDeck } from "../utils/api";
import DeckButtons from "./DeckButtons";
import CardsInDeck from "./CardsInDeck";

function ViewDeck({ setError }) {
  const [card, setCard] = useState([]);
  const [deck, setDeck] = useState([]);
  const { deckId } = useParams();
  const { cards } = deck;
  const history = useHistory();

  //fetches current deck
  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId).then(setDeck).catch(setError);
    return () => abortController.abort();
  }, [deckId]);

  useEffect(() => {
    const abortController = new AbortController();
    if (Object.keys(deck).length) {
      setCard(
        cards.map((card) => (
          <CardsInDeck
            key={card.id}
            card={card}
            deckId={deckId}
            history={history}
          />
        ))
      );
    }
    return () => abortController.abort();
  }, [deck]);

  return (
    <main>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active " aria-current="page">
            {deck.name}
          </li>
        </ol>
      </nav>
      <div>
        <h4>{deck.name}</h4>
        <p>{deck.description}</p>
        <DeckButtons deckId={deckId} navigate={navigate} /
      </div>
      <br />
      <div>
        <h2>Cards</h2>
        {card}
      </div>
    </main>
  );
}
export default ViewDeck;
