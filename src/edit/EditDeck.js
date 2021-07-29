import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { readDeck, updateDeck } from "../utils/api";

function EditDeck({ setError }) {
  const [deck, setDeck] = useState([]);
  const { deckId } = useParams();
  const history = useHistory();
  const initialFormSate = {
    name: `${deck.name}`,
    description: `${deck.description}`,
  };

  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId).then(setDeck).catch(setError);
    return () => abortController.abort();
  }, [deckId]);

  const handleChange = ({ target }) => {
    setDeck({
      ...deck,
      [target.name]: target.value,
    });
  };

  const handleSumbit = (event) => {
    event.preventDefault();
    updateDeck(deck).then(history.push(`/decks/${deckId}`));
  };

  return (
    <main>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="">{deck.name}</a>
          </li>
          <li className="breadcrumb-item active " aria-current="page">
            Edit Deck
          </li>
        </ol>
      </nav>
      <div>
        <h2>Edit Deck</h2>
        <form onSubmit={handleSumbit}>
          <div className="form-group">
            <label for="name">Name</label>
            <input
              name="name"
              type="text"
              className="form-control"
              id="name"
              placeholder="Deck Name"
              onChange={handleChange}
              value={initialFormSate.name}
            />
          </div>
          <div className="form-group">
            <label for="description">Description</label>
            <textarea
              name="description"
              className="form-control"
              id="description"
              rows="3"
              placeholder="Brief description of the deck"
              onChange={handleChange}
              value={initialFormSate.description}
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

export default EditDeck;
