import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import { readDeck } from "../utils/api";
import { createCard } from "../utils/api";

function CreateNewCard({ setError }) {
  const [deck, setDeck] = useState([]);
  const { deckId } = useParams();
  const history = useHistory();

  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId).then(setDeck).catch(setError);
    return () => abortController.abort();
  }, [deckId]);

  const initialFormSate = {
    front: "",
    back: "",
  };
  const [formData, setFormData] = useState({ ...initialFormSate });

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSumbit = (event) => {
    event.preventDefault();
    createCard(deckId, formData).then(setFormData({ ...initialFormSate }));
  };

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
          <li className="breadcrumb-item active " aria-current="page">
            Add Card
          </li>
        </ol>
      </nav>
      <div>
        <h2>{deck.name}: Add Card</h2>
        <form onSubmit={handleSumbit}>
          <div className="form-group">
            <label for="front">Front</label>
            <textarea
              name="front"
              className="form-control"
              id="front"
              rows="3"
              placeholder="Front side of card"
              onChange={handleChange}
              value={formData.front}
            ></textarea>
          </div>
          <div className="form-group">
            <label for="back">Back</label>
            <textarea
              name="back"
              className="form-control"
              id="back"
              rows="3"
              placeholder="Back side of card"
              onChange={handleChange}
              value={formData.back}
            ></textarea>
          </div>
          <button
            onClick={() => history.push(`/decks/${deckId}`)}
            className="mr-2 btn btn-secondary"
          >
            Done
          </button>
          <button type="submit" className="mr-2 btn btn-primary">
            Save
          </button>
        </form>
      </div>
    </main>
  );
}

export default CreateNewCard;
