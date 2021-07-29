import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import { readDeck, updateCard, readCard } from "../utils/api";

function EditCard({ setError }) {
  const [deck, setDeck] = useState([]);
  const [card, setCard] = useState();
  const { deckId, cardId } = useParams();
  const history = useHistory();

  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId).then(setDeck).catch(setError);
    return () => abortController.abort();
  }, [deck]);

  useEffect(() => {
    const abortController = new AbortController();
    readCard(cardId).then(setCard).catch(setError);
    return () => abortController.abort();
  }, [cardId]);

  const initialFormSate = {
    front: ``,
    back: ``,
  };
  const handleChange = ({ target }) => {
    setCard({
      ...card,
      [target.name]: target.value,
    });
  };

  const handleSumbit = (event) => {
    event.preventDefault();
    updateCard(card).then(history.push(`/decks/${deckId}`));
  };

  return (
    <main>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href={`/decks/${deckId}`}>Deck {deck.name}</a>
          </li>
          <li className="breadcrumb-item active " aria-current="page">
            Edit Card
          </li>
        </ol>
      </nav>
      <div>
        <h2>Edit Card</h2>
        <form onSubmit={handleSumbit}>
          <div className="form-group">
            <label for="front">Front</label>
            <textarea
              name="front"
              className="form-control"
              id="front"
              rows="3"
              onChange={handleChange}
              value={card ? card.front : ""}
            ></textarea>
          </div>
          <div className="form-group">
            <label for="back">Back</label>
            <textarea
              name="back"
              className="form-control"
              id="back"
              rows="3"
              onChange={handleChange}
              value={card ? card.back : ""}
            ></textarea>
          </div>
          <button
            onClick={() => history.push(`/decks/${deckId}`)}
            className="mr-2 btn btn-secondary"
          >
            Cancel
          </button>
          <button type="submit" className="mr-2 btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}

export default EditCard;
