import React from "react";
import { deleteDeck } from "../utils/api";

function DeckButtons({ deckId, history }) {
  //handles delete button click
  const handleDelete = async () => {
    const result = window.confirm("Delete this Deck?");
    if (result) {
      await deleteDeck(deckId);
      history.push("/");
    }
  };

  return (
    <div>
      <button
        onClick={() => history.push(`/decks/${deckId}/edit`)}
        className="mr-2 btn btn-secondary"
      >
        Edit
      </button>
      <button
        onClick={() => history.push(`/decks/${deckId}/study`)}
        className="mr-2 btn btn-primary"
      >
        Study
      </button>
      <button
        onClick={() => history.push(`/decks/${deckId}/cards/new`)}
        className="btn btn-primary"
      >
        Add Cards
      </button>
      <button onClick={handleDelete} className="float-right btn btn-danger">
        Delete
      </button>
    </div>
  );
}

export default DeckButtons;
