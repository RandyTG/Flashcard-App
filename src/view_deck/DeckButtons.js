import React from "react";
import { deleteDeck } from "../utils/api";

function DeckButtons({ deckId, navigate }) {
  //handles delete button click
  const handleDelete = async () => {
    const result = window.confirm("Delete this Deck?");
    if (result) {
      await deleteDeck(deckId);
      navigate("/");
    }
  };

  return (
    <div>
      <button
        onClick={() => navigate(`/decks/${deckId}/edit`)}
        className="mr-2 btn btn-secondary"
      >
        Edit
      </button>
      <button
        onClick={() => navigate(`/decks/${deckId}/study`)}
        className="mr-2 btn btn-primary"
      >
        Study
      </button>
      <button
        onClick={() => navigate(`/decks/${deckId}/cards/new`)}
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
